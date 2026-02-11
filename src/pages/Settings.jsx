import { useState, useEffect } from 'react';
import { Settings, Bell, Lock, Eye, Volume2, Moon } from 'lucide-react';

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: false,
    twoFactorAuth: false,
    darkMode: true,
    soundEnabled: true,
    dataCollection: true,
  });

  const [saved, setSaved] = useState(false);

  // Load settings from localStorage on mount
  useEffect(() => {
    const savedSettings = localStorage.getItem('appSettings');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }
  }, []);

  const handleToggle = (setting) => {
    const newSettings = {
      ...settings,
      [setting]: !settings[setting]
    };
    setSettings(newSettings);
    localStorage.setItem('appSettings', JSON.stringify(newSettings));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const settingsGroups = [
    {
      title: 'Notifications',
      icon: Bell,
      color: 'from-cyan-500 to-blue-500',
      settings: [
        {
          key: 'emailNotifications',
          label: 'Email Notifications',
          description: 'Receive email updates about your account and activities',
          icon: null
        },
        {
          key: 'pushNotifications',
          label: 'Push Notifications',
          description: 'Get push notifications on your devices',
          icon: null
        },
      ]
    },
    {
      title: 'Security & Privacy',
      icon: Lock,
      color: 'from-purple-500 to-pink-500',
      settings: [
        {
          key: 'twoFactorAuth',
          label: 'Two-Factor Authentication',
          description: 'Add an extra layer of security to your account',
          icon: null
        },
        {
          key: 'dataCollection',
          label: 'Allow Data Collection',
          description: 'Help improve our platform by sharing usage analytics',
          icon: null
        },
      ]
    },
    {
      title: 'Preferences',
      icon: Eye,
      color: 'from-green-500 to-teal-500',
      settings: [
        {
          key: 'darkMode',
          label: 'Dark Mode',
          description: 'Use dark theme across the platform',
          icon: null
        },
        {
          key: 'soundEnabled',
          label: 'Sound Effects',
          description: 'Enable audio feedback for interactions',
          icon: null
        },
      ]
    }
  ];

  return (
    <main className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Settings className="text-cyan-400" size={32} />
            <h1 className="text-4xl font-bold text-white">Settings</h1>
          </div>
          <p className="text-slate-300">Manage your account preferences and security options</p>
        </div>

        {/* Success Message */}
        {saved && (
          <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg animate-pulse">
            <p className="text-green-400 font-semibold">✓ Settings updated successfully!</p>
          </div>
        )}

        {/* Settings Groups */}
        <div className="space-y-6">
          {settingsGroups.map((group, groupIdx) => {
            const GroupIcon = group.icon;
            return (
              <div key={groupIdx} className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden hover:border-slate-600 transition-colors">
                {/* Group Header */}
                <div className={`bg-gradient-to-r ${group.color} p-6 flex items-center gap-4`}>
                  <div className="p-3 bg-white/10 rounded-lg">
                    <GroupIcon className="text-white" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-white">{group.title}</h2>
                </div>

                {/* Group Settings */}
                <div className="divide-y divide-slate-700">
                  {group.settings.map((setting, settingIdx) => (
                    <div
                      key={settingIdx}
                      className="p-6 flex items-center justify-between hover:bg-slate-700/50 transition-colors"
                    >
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-1">{setting.label}</h3>
                        <p className="text-slate-400 text-sm">{setting.description}</p>
                      </div>
                      <div className="ml-4">
                        <input
                          type="checkbox"
                          checked={settings[setting.key]}
                          onChange={() => handleToggle(setting.key)}
                          className="w-6 h-6 accent-cyan-500 cursor-pointer"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Settings */}
        <div className="mt-8 space-y-6">
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-8">
            <h3 className="text-xl font-bold text-white mb-4">Account Actions</h3>
            <div className="space-y-3">
              <button className="w-full px-6 py-3 bg-slate-700 text-white font-semibold rounded-lg hover:bg-slate-600 transition-colors text-left">
                Change Password
              </button>
              <button className="w-full px-6 py-3 bg-slate-700 text-white font-semibold rounded-lg hover:bg-slate-600 transition-colors text-left">
                Download Your Data
              </button>
              <button className="w-full px-6 py-3 bg-red-600/20 border border-red-600/30 text-red-400 font-semibold rounded-lg hover:bg-red-600/30 transition-colors text-left">
                Delete Account
              </button>
            </div>
          </div>

          {/* Privacy Notice */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
            <p className="text-slate-300 text-sm">
              <span className="font-semibold text-cyan-400">🔒 Your Privacy Matters:</span> All your settings are saved locally in your browser. We never sell your data. For more information, check our <a href="#" className="text-cyan-400 hover:underline">Privacy Policy</a>.
            </p>
          </div>
        </div>

        {/* Settings Summary */}
        <div className="mt-8 p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-slate-700 rounded-lg">
          <h4 className="text-white font-semibold mb-3">Current Status:</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
            {Object.entries(settings).map(([key, value]) => (
              <div key={key} className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${value ? 'bg-green-400' : 'bg-slate-400'}`}></div>
                <span className="text-slate-300 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}: <strong className={value ? 'text-green-400' : 'text-slate-400'}>{value ? 'On' : 'Off'}</strong></span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
