import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useStore } from '../store/useStore';
import { logActivity, getActivities } from '../lib/firestore';
import { Text, Sparkles } from '@react-three/drei';
import GlassPanel from '../components/GlassPanel';
import Button3D from '../components/Button3D';
import InputField3D from '../components/InputField3D';
import ProgressRing3D from '../components/ProgressRing3D';
import { 
  calcCarCO2, 
  calcBusCO2, 
  calcFlightCO2, 
  calcMeatMealCO2, 
  calcVegMealCO2, 
  calcElectricityCO2,
  calcShoppingCO2 
} from '../utils/carbonCalculator';

export function TrackerScene() {
  const { currentUser } = useAuth();
  const { navigate, setUserStats, addChatMessage } = useStore();

  const [activeTab, setActiveTab] = useState('transport'); // 'transport' | 'food' | 'energy' | 'shopping'
  const [subType, setSubType] = useState('car'); // transport: 'car'|'bus'|'flight'|'bike'; food: 'meat'|'veg'; shopping: 'clothing'|'electronics'|'groceries'
  const [inputValue, setInputValue] = useState('10');
  const [recentLogs, setRecentLogs] = useState([]);
  
  // Submit animation state
  const [submitPercent, setSubmitPercent] = useState(0);
  const [animatingSubmit, setAnimatingSubmit] = useState(false);

  useEffect(() => {
    fetchLogs();
  }, [currentUser]);

  const fetchLogs = async () => {
    if (!currentUser) return;
    try {
      const logs = await getActivities(currentUser.uid, 5);
      setRecentLogs(logs || []);
    } catch {
      // Silently ignore log fetch errors; UI shows empty state
    }
  };

  // Live Carbon footprint calculator
  const calculateLiveCO2 = () => {
    const num = parseFloat(inputValue) || 0;
    if (activeTab === 'transport') {
      if (subType === 'car') return calcCarCO2(num);
      if (subType === 'bus') return calcBusCO2(num);
      if (subType === 'flight') return calcFlightCO2(num);
      return 0; // bike
    }
    if (activeTab === 'food') {
      if (subType === 'meat') return calcMeatMealCO2(num);
      return -calcVegMealCO2(num); // vegetarian meals save co2
    }
    if (activeTab === 'energy') {
      return calcElectricityCO2(num);
    }
    if (activeTab === 'shopping') {
      return calcShoppingCO2(num, subType);
    }
    return 0;
  };

  const currentCO2 = calculateLiveCO2();

  const handleSubmit = async () => {
    if (!currentUser || animatingSubmit) return;
    setAnimatingSubmit(true);
    setSubmitPercent(0.01);

    // Run circular progress ring animation 0 -> 100%
    let progress = 0;
    const interval = setInterval(() => {
      progress += 0.1;
      if (progress >= 1.0) {
        setSubmitPercent(1.0);
        clearInterval(interval);
        executeSubmit();
      } else {
        setSubmitPercent(progress);
      }
    }, 80);
  };

  const executeSubmit = async () => {
    try {
      const num = parseFloat(inputValue) || 0;
      let logLabel = '';
      if (activeTab === 'transport') {
        logLabel = `${subType.toUpperCase()} TRAVEL: ${num} KM`;
      } else if (activeTab === 'food') {
        logLabel = `${subType.toUpperCase()} MEALS: ${num} COUNT`;
      } else if (activeTab === 'energy') {
        logLabel = `ELECTRICITY LOG: ${num} KWH`;
      } else {
        logLabel = `SHOPPED ${subType.toUpperCase()}: ${num} ITEMS`;
      }

      const activity = {
        category: activeTab,
        co2: currentCO2,
        value: num,
        label: logLabel
      };

      await logActivity(currentUser.uid, activity);
      
      // Update local state metrics
      if (currentCO2 < 0) {
        setUserStats({ totalSaved: Math.abs(currentCO2) });
      } else {
        setUserStats({ dailyFootprint: currentCO2 });
      }

      // Behavioral nudge
      if (currentCO2 > 5) {
        // High emission warning nudge
        addChatMessage({
          sender: 'bot',
          text: `⚠️ That ${activeTab} activity added ${currentCO2.toFixed(1)}kg CO₂. Try the bus next time to cut this by 58%!`
        });
      } else if (currentCO2 < 0) {
        // Positive reinforcement
        addChatMessage({
          sender: 'bot',
          text: `🌱 Great choice! You saved ${Math.abs(currentCO2).toFixed(1)}kg CO₂ with that eco action!`
        });
      }

      setTimeout(() => {
        setAnimatingSubmit(false);
        setInputValue('10');
        fetchLogs();
      }, 600);

    } catch (e) {
      setAnimatingSubmit(false);
    }
  };

  return (
    <group>
      <Sparkles count={40} scale={4} size={2} speed={0.4} color="#00d4ff" />

      {/* ================= MAIN CONTROLLER PANEL (x=-1.5) ================= */}
      <group position={[-1.3, -0.1, 0]} rotation={[-0.1, 0.05, 0]}>
        <GlassPanel width={3.8} height={2.8} depth={0.05} glowColor="#00ff87">
          
          {/* Main Title */}
          <Text
            position={[0, 1.15, 0.05]}
            fontSize={0.15}
            color="#ffffff"
          >
            ACTIVITY DISPATCH CONSOLE
          </Text>

          {/* Core Tabs Selection */}
          <group position={[0, 0.72, 0.05]}>
            {['transport', 'food', 'energy', 'shopping'].map((tab, idx) => {
              const active = activeTab === tab;
              return (
                <group key={tab} position={[-1.35 + idx * 0.9, 0, active ? 0.05 : 0]}>
                  <Button3D
                    width={0.8}
                    height={0.22}
                    label={tab.substring(0, 5).toUpperCase()}
                    color={active ? '#00ff87' : 'rgba(0, 255, 135, 0.12)'}
                    textColor={active ? '#020b06' : '#00ff87'}
                    fontSize={0.07}
                    onClick={() => {
                      setActiveTab(tab);
                      if (tab === 'transport') setSubType('car');
                      else if (tab === 'food') setSubType('meat');
                      else if (tab === 'shopping') setSubType('clothing');
                    }}
                  />
                </group>
              );
            })}
          </group>

          {/* Sub Option Selectors based on tab */}
          <group position={[0, 0.28, 0.05]}>
            {activeTab === 'transport' && (
              <>
                <Button3D width={0.7} position={[-1.0, 0, 0]} height={0.2} label="CAR" color={subType==='car'?'#00d4ff':'rgba(255,255,255,0.08)'} fontSize={0.065} onClick={()=>setSubType('car')} />
                <Button3D width={0.7} position={[-0.3, 0, 0]} height={0.2} label="BUS" color={subType==='bus'?'#00d4ff':'rgba(255,255,255,0.08)'} fontSize={0.065} onClick={()=>setSubType('bus')} />
                <Button3D width={0.7} position={[0.4, 0, 0]} height={0.2} label="FLIGHT" color={subType==='flight'?'#00d4ff':'rgba(255,255,255,0.08)'} fontSize={0.065} onClick={()=>setSubType('flight')} />
                <Button3D width={0.7} position={[1.1, 0, 0]} height={0.2} label="BIKE" color={subType==='bike'?'#00d4ff':'rgba(255,255,255,0.08)'} fontSize={0.065} onClick={()=>setSubType('bike')} />
              </>
            )}
            {activeTab === 'food' && (
              <>
                <Button3D width={1.0} position={[-0.6, 0, 0]} height={0.2} label="MEAT MEAL" color={subType==='meat'?'#00d4ff':'rgba(255,255,255,0.08)'} fontSize={0.07} onClick={()=>setSubType('meat')} />
                <Button3D width={1.0} position={[0.6, 0, 0]} height={0.2} label="VEG MEAL" color={subType==='veg'?'#00d4ff':'rgba(255,255,255,0.08)'} fontSize={0.07} onClick={()=>setSubType('veg')} />
              </>
            )}
            {activeTab === 'energy' && (
              <Text fontSize={0.095} color="#00d4ff">GRID ELECTRICITY (KWH)</Text>
            )}
            {activeTab === 'shopping' && (
              <>
                <Button3D width={0.9} position={[-0.9, 0, 0]} height={0.2} label="CLOTHING" color={subType==='clothing'?'#00d4ff':'rgba(255,255,255,0.08)'} fontSize={0.06} onClick={()=>setSubType('clothing')} />
                <Button3D width={0.9} position={[0, 0, 0]} height={0.2} label="DEVICES" color={subType==='electronics'?'#00d4ff':'rgba(255,255,255,0.08)'} fontSize={0.06} onClick={()=>setSubType('electronics')} />
                <Button3D width={0.9} position={[0.9, 0, 0]} height={0.2} label="GROCERIES" color={subType==='groceries'?'#00d4ff':'rgba(255,255,255,0.08)'} fontSize={0.06} onClick={()=>setSubType('groceries')} />
              </>
            )}
          </group>

          {/* Interactive input box */}
          <group position={[0, -0.25, 0.05]}>
            <InputField3D
              width={2.8}
              height={0.36}
              placeholder="ENTER METRIC AMOUNT"
              type="number"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </group>

          {/* Submitting Success ring animation */}
          {animatingSubmit ? (
            <group position={[0, -0.88, 0.05]}>
              <ProgressRing3D progress={submitPercent} size={0.24} color="#00ff87" />
            </group>
          ) : (
            <group position={[0, -0.92, 0.05]}>
              <Button3D
                width={2.8}
                height={0.35}
                label="DISPATCH TO FIRESTORE"
                color="#00ff87"
                onClick={handleSubmit}
              />
            </group>
          )}
        </GlassPanel>

        {/* Live carbon indicator text below panel */}
        <group position={[0, -1.75, 0.05]}>
          <Text
            fontSize={0.16}
            color={currentCO2 < 0 ? '#00ff87' : '#ffb347'}
          >
            {currentCO2 < 0 
              ? `= SAVING ${Math.abs(currentCO2).toFixed(1)} KG CO₂ 🌱` 
              : `= EMITTING ${currentCO2.toFixed(1)} KG CO₂ 💨`}
          </Text>
        </group>
      </group>

      {/* ================= LOGS LOGISTICS SIDEBAR PANEL (x=2.2) ================= */}
      <group position={[2.1, -0.1, -0.1]} rotation={[-0.1, -0.05, 0]}>
        <GlassPanel width={2.4} height={2.8} depth={0.05} glowColor="#00d4ff">
          <Text
            position={[0, 1.15, 0.05]}
            fontSize={0.13}
            color="#ffffff"
          >
            RECENT DISPATCHES
          </Text>

          {/* Stack list of recent activities */}
          <group position={[0, 0.65, 0.05]}>
            {recentLogs.length > 0 ? (
              recentLogs.map((log, idx) => (
                <group key={log.id || idx} position={[0, -idx * 0.44, 0]}>
                  <mesh position={[0, 0, -0.01]}>
                    <planeGeometry args={[2.0, 0.32]} />
                    <meshBasicMaterial color="#0b1b11" transparent opacity={0.4} />
                  </mesh>
                  <Text
                    position={[-0.9, 0.08, 0.01]}
                    fontSize={0.072}
                    color="#ffffff"
                    anchorX="left"
                    anchorY="middle"
                  >
                    {log.label.substring(0, 22)}
                  </Text>
                  <Text
                    position={[-0.9, -0.06, 0.01]}
                    fontSize={0.065}
                    color={log.co2 < 0 ? '#00ff87' : '#ffb347'}
                    anchorX="left"
                    anchorY="middle"
                  >
                    {log.co2 < 0 
                      ? `SAVED ${Math.abs(log.co2).toFixed(1)} KG` 
                      : `EMITTED ${log.co2.toFixed(1)} KG`}
                  </Text>
                </group>
              ))
            ) : (
              <group position={[0, -0.5, 0]}>
                <Text
                  fontSize={0.085}
                  color="#666666"
                  maxWidth={1.8}
                  textAlign="center"
                >
                  CONSOLE READY. NO TRANSACTIONS LOGGED YET.
                </Text>
              </group>
            )}
          </group>
        </GlassPanel>
      </group>
    </group>
  );
}

export default TrackerScene;
