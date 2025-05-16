import React from 'react';
import { 
  ShieldCheck, 
  Lock, 
  Eye, 
  FileText, 
  AlertTriangle,
  Check,
  X,
  Info
} from 'lucide-react';

const SecurityPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-success-100 flex items-center justify-center">
            <ShieldCheck size={20} className="text-success-600" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-neutral-900">Security & Compliance</h1>
            <p className="text-neutral-500">Manage data privacy and security settings</p>
          </div>
        </div>
        
        <button className="flex items-center gap-1.5 px-4 py-2 rounded-md bg-neutral-800 text-white text-sm hover:bg-neutral-900 transition-colors">
          <Lock size={16} />
          <span>Audit Log</span>
        </button>
      </div>
      
      {/* Compliance Status */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-xl shadow-sm border border-neutral-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-full bg-success-100 flex items-center justify-center">
              <Lock size={20} className="text-success-600" />
            </div>
            <div>
              <h3 className="font-medium">GDPR Compliance</h3>
              <div className="flex items-center text-sm gap-1 text-success-600">
                <Check size={14} />
                <span>Compliant</span>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral-600">
            Your data handling practices meet all required GDPR standards.
          </p>
        </div>
        
        <div className="bg-white p-5 rounded-xl shadow-sm border border-neutral-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-full bg-success-100 flex items-center justify-center">
              <Eye size={20} className="text-success-600" />
            </div>
            <div>
              <h3 className="font-medium">Data Privacy</h3>
              <div className="flex items-center text-sm gap-1 text-success-600">
                <Check size={14} />
                <span>Protected</span>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral-600">
            User data is properly anonymized and protected according to best practices.
          </p>
        </div>
        
        <div className="bg-white p-5 rounded-xl shadow-sm border border-neutral-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-full bg-warning-100 flex items-center justify-center">
              <FileText size={20} className="text-warning-600" />
            </div>
            <div>
              <h3 className="font-medium">Data Retention</h3>
              <div className="flex items-center text-sm gap-1 text-warning-600">
                <AlertTriangle size={14} />
                <span>Review Needed</span>
              </div>
            </div>
          </div>
          <p className="text-sm text-neutral-600">
            Policy update required to align with latest industry standards.
          </p>
        </div>
      </div>
      
      {/* Security Settings */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-200">
        <h2 className="text-lg font-semibold mb-4">Data Security Settings</h2>
        
        <div className="space-y-4">
          <div className="border-b border-neutral-200 pb-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <h3 className="font-medium">Data Encryption</h3>
                <div className="px-2 py-0.5 rounded-full bg-success-50 text-success-700 border border-success-200 text-xs">
                  Enabled
                </div>
              </div>
              <button className="text-sm text-primary-600">Configure</button>
            </div>
            <p className="text-sm text-neutral-600">All customer data is encrypted at rest and in transit</p>
          </div>
          
          <div className="border-b border-neutral-200 pb-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <h3 className="font-medium">User Access Controls</h3>
                <div className="px-2 py-0.5 rounded-full bg-success-50 text-success-700 border border-success-200 text-xs">
                  Enabled
                </div>
              </div>
              <button className="text-sm text-primary-600">Configure</button>
            </div>
            <p className="text-sm text-neutral-600">Role-based access control for all system users</p>
          </div>
          
          <div className="border-b border-neutral-200 pb-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <h3 className="font-medium">Data Anonymization</h3>
                <div className="px-2 py-0.5 rounded-full bg-success-50 text-success-700 border border-success-200 text-xs">
                  Enabled
                </div>
              </div>
              <button className="text-sm text-primary-600">Configure</button>
            </div>
            <p className="text-sm text-neutral-600">Personal identifiers are masked in analytics and reports</p>
          </div>
          
          <div className="border-b border-neutral-200 pb-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <h3 className="font-medium">Audit Logging</h3>
                <div className="px-2 py-0.5 rounded-full bg-success-50 text-success-700 border border-success-200 text-xs">
                  Enabled
                </div>
              </div>
              <button className="text-sm text-primary-600">Configure</button>
            </div>
            <p className="text-sm text-neutral-600">All system actions are logged for compliance purposes</p>
          </div>
          
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <h3 className="font-medium">Automated Data Deletion</h3>
                <div className="px-2 py-0.5 rounded-full bg-error-50 text-error-700 border border-error-200 text-xs">
                  Disabled
                </div>
              </div>
              <button className="text-sm text-primary-600">Enable</button>
            </div>
            <p className="text-sm text-neutral-600">Automatically delete data after retention period</p>
          </div>
        </div>
      </div>
      
      {/* GDPR Compliance */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-200">
        <h2 className="text-lg font-semibold mb-4">GDPR Compliance Checklist</h2>
        
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 rounded-full bg-success-100 h-5 w-5 flex items-center justify-center">
              <Check size={14} className="text-success-600" />
            </div>
            <div>
              <h3 className="text-sm font-medium">Data Subject Access Rights</h3>
              <p className="text-xs text-neutral-500">Users can request access to their personal data</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="mt-0.5 rounded-full bg-success-100 h-5 w-5 flex items-center justify-center">
              <Check size={14} className="text-success-600" />
            </div>
            <div>
              <h3 className="text-sm font-medium">Right to be Forgotten</h3>
              <p className="text-xs text-neutral-500">Users can request deletion of their data</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="mt-0.5 rounded-full bg-success-100 h-5 w-5 flex items-center justify-center">
              <Check size={14} className="text-success-600" />
            </div>
            <div>
              <h3 className="text-sm font-medium">Data Breach Notification</h3>
              <p className="text-xs text-neutral-500">Process in place to notify users of data breaches</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="mt-0.5 rounded-full bg-success-100 h-5 w-5 flex items-center justify-center">
              <Check size={14} className="text-success-600" />
            </div>
            <div>
              <h3 className="text-sm font-medium">Privacy Policy</h3>
              <p className="text-xs text-neutral-500">Clear and accessible privacy policy</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="mt-0.5 rounded-full bg-error-100 h-5 w-5 flex items-center justify-center">
              <X size={14} className="text-error-600" />
            </div>
            <div>
              <h3 className="text-sm font-medium">Data Portability</h3>
              <p className="text-xs text-neutral-500">Users can export their data in a machine-readable format</p>
            </div>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-primary-50 border border-primary-100 rounded-lg flex items-start gap-3">
          <Info size={18} className="text-primary-600 mt-0.5" />
          <div>
            <h3 className="text-sm font-medium text-primary-800">Compliance Recommendation</h3>
            <p className="text-xs text-primary-700 mt-1">
              Implement data portability functionality to allow users to export their data in common formats like CSV or JSON.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityPage;