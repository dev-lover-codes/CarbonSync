import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, ArrowLeft } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { useAuth } from '../../contexts/AuthContext';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import Card from '../../components/ui/Card';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const { resetPassword } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return toast.error('Please enter your email');

    try {
      setLoading(true);
      await resetPassword(email);
      toast.success('Password reset email sent! Check your inbox.');
    } catch (error) {
      toast.error('Failed to send reset email. Please check the address.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-surface flex items-center justify-center p-6">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <h1 className="text-4xl font-black text-primary mb-2">CarbonSync</h1>
        </div>

        <Card className="p-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-surface-dark mb-2">Reset Password</h2>
            <p className="text-gray-300">Enter your email and we'll send you a link to reset your password.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              label="Email Address"
              type="email"
              placeholder="name@example.com"
              icon={Mail}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <Button type="submit" className="w-full py-4" isLoading={loading}>
              Send Reset Link
            </Button>
          </form>

          <div className="mt-8 text-center">
            <Link to="/login" className="inline-flex items-center text-sm font-bold text-gray-300 hover:text-primary transition-colors">
              <ArrowLeft size={16} className="mr-2" />
              Back to Login
            </Link>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default ForgotPassword;
