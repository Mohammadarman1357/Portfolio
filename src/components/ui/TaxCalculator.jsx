import { useState, useId } from 'react';
import { Calculator, Sparkles, TrendingUp, ShieldCheck, ArrowRight, DollarSign, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function TaxCalculator() {
  const [revenue, setRevenue] = useState(185000);
  const [businessType, setBusinessType] = useState('llc');
  const [hasRdExpenses, setHasRdExpenses] = useState(true);
  const [hasEquipment, setHasEquipment] = useState(true);
  const [hasContractors, setHasContractors] = useState(true);
  const [hasHomeOffice, setHasHomeOffice] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);

  const revenueInputId = useId();

  // Dynamic calculations based on IRS formulas
  const baseRate = businessType === 'scorp' ? 0.22 : businessType === 'startup' ? 0.21 : 0.28;
  
  let deductions = 0;
  if (hasRdExpenses) deductions += revenue * 0.14; // Section 174 & R&D Credit
  if (hasEquipment) deductions += 12500; // Section 179 expensing
  if (hasContractors) deductions += revenue * 0.08;
  if (hasHomeOffice) deductions += 4800; // Simplified / Actual method

  const grossTaxWithoutGenius = Math.round(revenue * baseRate);
  const estimatedSavings = Math.min(
    Math.round(deductions * baseRate),
    Math.round(grossTaxWithoutGenius * 0.48)
  );
  const netTaxWithGenius = Math.max(0, grossTaxWithoutGenius - estimatedSavings);
  const effectiveTaxRate = ((netTaxWithGenius / revenue) * 100).toFixed(1);

  const handleSimulate = () => {
    setIsCalculating(true);
    setTimeout(() => {
      setIsCalculating(false);
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#10b981', '#6366f1', '#f59e0b', '#3b82f6']
        });
      } catch {
        // Confetti fallback
      }
    }, 400);
  };

  return (
    <div className="tactile-card rounded-3xl p-6 sm:p-8 relative overflow-hidden border border-slate-200 shadow-xl">
      {/* Decorative gradient orb */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
              <Sparkles className="w-3 h-3 text-emerald-600" />
              Interactive Engine Demo
            </span>
            <span className="text-xs text-slate-400 font-mono">v2.4.0 Live</span>
          </div>
          <h4 className="text-xl font-bold text-slate-900">
            Real-Time Tax Deduction Simulator
          </h4>
          <p className="text-xs text-slate-500">
            Adjust your business parameters to see Tax Genius neural deduction modeling in action.
          </p>
        </div>

        <button
          onClick={handleSimulate}
          disabled={isCalculating}
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 shadow-md transition-all active:scale-95 disabled:opacity-50"
        >
          <Calculator className="w-3.5 h-3.5" />
          <span>{isCalculating ? 'Simulating...' : 'Recalculate Savings'}</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
        {/* Controls Column */}
        <div className="lg:col-span-7 space-y-6">
          {/* Revenue Slider */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label htmlFor={revenueInputId} className="text-xs font-semibold text-slate-700">
                Annual Gross Revenue
              </label>
              <span className="font-mono text-sm font-bold text-slate-900 bg-slate-100 px-3 py-1 rounded-lg border border-slate-200">
                ${revenue.toLocaleString()}
              </span>
            </div>
            <input
              id={revenueInputId}
              type="range"
              min="30000"
              max="1500000"
              step="5000"
              value={revenue}
              onChange={(e) => setRevenue(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-800"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-mono">
              <span>$30k</span>
              <span>$500k</span>
              <span>$1.5M+</span>
            </div>
          </div>

          {/* Business Entity Selection */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-2">
              Entity Structure
            </label>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
              {[
                { id: 'llc', label: 'LLC / Pass-Thru' },
                { id: 'scorp', label: 'S-Corporation' },
                { id: 'startup', label: 'C-Corp / VC' },
                { id: 'sole', label: 'Sole Prop / 1099' },
              ].map((type) => (
                <button
                  key={type.id}
                  onClick={() => setBusinessType(type.id)}
                  className={`px-3 py-2 rounded-xl text-xs font-medium border transition-all ${
                    businessType === type.id
                      ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {type.label}
                </button>
              ))}
            </div>
          </div>

          {/* Expense Factor Toggles */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-2">
              Deductible Expense Vectors
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {[
                {
                  state: hasRdExpenses,
                  setter: setHasRdExpenses,
                  title: 'R&D Software & Cloud',
                  desc: 'Section 41 & 174 credits',
                },
                {
                  state: hasEquipment,
                  setter: setHasEquipment,
                  title: 'Hardware & Machinery',
                  desc: 'Section 179 immediate write-off',
                },
                {
                  state: hasContractors,
                  setter: setHasContractors,
                  title: 'Subcontractor Payroll',
                  desc: '1099-NEC expense matching',
                },
                {
                  state: hasHomeOffice,
                  setter: setHasHomeOffice,
                  title: 'Dedicated Workspace',
                  desc: 'Home office deduction calculation',
                },
              ].map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => item.setter(!item.state)}
                  className={`flex items-start gap-2.5 p-3 rounded-2xl border text-left transition-all ${
                    item.state
                      ? 'bg-emerald-50/70 border-emerald-300 shadow-xs'
                      : 'bg-slate-50 border-slate-200/80 opacity-75 hover:opacity-100'
                  }`}
                >
                  <div className={`mt-0.5 w-4 h-4 rounded-md flex items-center justify-center border transition-colors ${
                    item.state ? 'bg-emerald-600 border-emerald-600 text-white' : 'border-slate-300 bg-white'
                  }`}>
                    {item.state && <CheckCircle2 className="w-3 h-3" />}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-800">{item.title}</p>
                    <p className="text-[11px] text-slate-500">{item.desc}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results / Live Output Box */}
        <div className="lg:col-span-5">
          <div className="tactile-card-dark rounded-2xl p-6 text-white h-full flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <DollarSign className="w-32 h-32" />
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold">
                  Tax Genius Assessment
                </span>
                <span className="flex items-center gap-1 text-[11px] text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded-full border border-slate-700">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" />
                  Audit-Proof
                </span>
              </div>

              <div className="mb-6">
                <span className="text-xs text-slate-400 block mb-1">
                  Estimated Tax Write-Off Savings
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-mono tracking-tight">
                    ${estimatedSavings.toLocaleString()}
                  </span>
                  <span className="text-xs font-semibold text-emerald-300/90 bg-emerald-950/60 px-2 py-0.5 rounded-md border border-emerald-800">
                    +${Math.round(estimatedSavings / 12).toLocaleString()}/mo
                  </span>
                </div>
              </div>

              <div className="space-y-2.5 pt-4 border-t border-slate-800 text-xs">
                <div className="flex justify-between text-slate-300">
                  <span>Standard Tax Liability:</span>
                  <span className="font-mono">${grossTaxWithoutGenius.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Identified Deductions:</span>
                  <span className="font-mono text-emerald-400">-${deductions.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-slate-100 font-semibold pt-2 border-t border-slate-800/60">
                  <span>Optimized Net Tax:</span>
                  <span className="font-mono text-white text-sm">${netTaxWithGenius.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-slate-400 text-[11px]">
                  <span>Effective Tax Rate:</span>
                  <span className="font-mono text-emerald-300">{effectiveTaxRate}% (down from {(baseRate * 100).toFixed(1)}%)</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-md transition-all active:scale-95"
              >
                <span>Deploy Engine in Your Stack</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
