import React, { useState } from 'react';
import { registerUser } from '../../api/auth';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');
    try {
      const data = await registerUser({ email, password, firstName, lastName });
      localStorage.setItem('token', data.data.token);
      setSuccess('Registration successful!');
      setTimeout(() => navigate('/'), 800);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#f8fbff] to-[#e2f7ff]">
      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md space-y-6">
        <h2 className="text-2xl font-bold mb-2 font-['Poppins']">Register</h2>
        {error && <div className="text-red-500 text-sm">{error}</div>}
        {success && <div className="text-green-600 text-sm">{success}</div>}
        <div>
          <label className="block mb-1 font-medium">First Name</label>
          <Input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} required className="w-full" />
        </div>
        <div>
          <label className="block mb-1 font-medium">Last Name</label>
          <Input type="text" value={lastName} onChange={e => setLastName(e.target.value)} required className="w-full" />
        </div>
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <Input type="email" value={email} onChange={e => setEmail(e.target.value)} required className="w-full" />
        </div>
        <div>
          <label className="block mb-1 font-medium">Password</label>
          <Input type="password" value={password} onChange={e => setPassword(e.target.value)} required className="w-full" />
        </div>
        <Button type="submit" className="w-full" disabled={loading}>{loading ? 'Registering...' : 'Register'}</Button>
        <div className="text-center text-sm mt-2">
          Already have an account? <a href="/login" className="text-[#27aae2] font-medium">Login</a>
        </div>
      </form>
    </div>
  );
} 