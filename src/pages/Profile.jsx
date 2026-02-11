import { useState } from 'react';
import { Save, User, Mail, Phone, MapPin, Briefcase } from 'lucide-react';

export default function Profile() {
  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    location: '',
    jobTitle: '',
    bio: '',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    setSaved(true);
    setIsEditing(false);
    localStorage.setItem('userProfile', JSON.stringify(profile));
    setTimeout(() => setSaved(false), 3000);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const isProfileComplete = profile.firstName && profile.lastName && profile.email;

  return (
    <main className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-2">Your Profile</h1>
          <p className="text-slate-300">Manage your personal and professional information</p>
        </div>

        {/* Success Message */}
        {saved && (
          <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
            <p className="text-green-400 font-semibold">✓ Profile saved successfully!</p>
          </div>
        )}

        {/* Profile Card */}
        <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden">
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-b border-slate-700 p-8">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <User className="text-white" size={40} />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">
                  {profile.firstName && profile.lastName
                    ? `${profile.firstName} ${profile.lastName}`
                    : 'Complete Your Profile'}
                </h2>
                {profile.jobTitle && (
                  <p className="text-cyan-400 text-lg">{profile.jobTitle}</p>
                )}
              </div>
            </div>
          </div>

          {/* Profile Form */}
          <form onSubmit={handleSave} className="p-8">
            <div className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-semibold mb-2">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={profile.firstName}
                    onChange={handleChange}
                    disabled={!isEditing}
                    placeholder="John"
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 disabled:opacity-50 focus:border-cyan-500 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={profile.lastName}
                    onChange={handleChange}
                    disabled={!isEditing}
                    placeholder="Doe"
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 disabled:opacity-50 focus:border-cyan-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Contact Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-semibold mb-2 flex items-center gap-2">
                    <Mail size={18} /> Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={profile.email}
                    onChange={handleChange}
                    disabled={!isEditing}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 disabled:opacity-50 focus:border-cyan-500 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2 flex items-center gap-2">
                    <Phone size={18} /> Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={profile.phone}
                    onChange={handleChange}
                    disabled={!isEditing}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 disabled:opacity-50 focus:border-cyan-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Professional Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-semibold mb-2 flex items-center gap-2">
                    <Briefcase size={18} /> Job Title
                  </label>
                  <input
                    type="text"
                    name="jobTitle"
                    value={profile.jobTitle}
                    onChange={handleChange}
                    disabled={!isEditing}
                    placeholder="Data Analyst"
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 disabled:opacity-50 focus:border-cyan-500 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={profile.company}
                    onChange={handleChange}
                    disabled={!isEditing}
                    placeholder="Your Company"
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 disabled:opacity-50 focus:border-cyan-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Location */}
              <div>
                <label className="block text-white font-semibold mb-2 flex items-center gap-2">
                  <MapPin size={18} /> Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={profile.location}
                  onChange={handleChange}
                  disabled={!isEditing}
                  placeholder="City, Country"
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 disabled:opacity-50 focus:border-cyan-500 focus:outline-none transition-colors"
                />
              </div>

              {/* Bio */}
              <div>
                <label className="block text-white font-semibold mb-2">Bio</label>
                <textarea
                  name="bio"
                  value={profile.bio}
                  onChange={handleChange}
                  disabled={!isEditing}
                  placeholder="Tell us about yourself..."
                  rows="4"
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 disabled:opacity-50 focus:border-cyan-500 focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Actions */}
              <div className="flex gap-4 pt-6 border-t border-slate-700">
                {isEditing ? (
                  <>
                    <button
                      type="submit"
                      disabled={!isProfileComplete}
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Save size={20} /> Save Changes
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsEditing(false)}
                      className="px-6 py-3 bg-slate-700 text-white font-semibold rounded-lg hover:bg-slate-600 transition-colors"
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <button
                    type="button"
                    onClick={handleEdit}
                    className="px-6 py-3 bg-slate-700 text-white font-semibold rounded-lg hover:bg-slate-600 transition-colors"
                  >
                    Edit Profile
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>

        {/* Info Box */}
        <div className="mt-8 p-6 bg-slate-800 border border-slate-700 rounded-lg">
          <p className="text-slate-300">
            <span className="text-cyan-400 font-semibold">💡 Tip:</span> Complete all required fields (marked with *) to save your profile. Your data is securely stored locally in your browser.
          </p>
        </div>
      </div>
    </main>
  );
}
