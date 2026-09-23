'use client'

import { useState } from 'react'
import {
  ArrowRight,
  BarChart3,
  Check,
  ChevronDown,
  Clipboard,
  FileCheck2,
  FileText,
  Gauge,
  KeyRound,
  LayoutDashboard,
  LockKeyhole,
  Menu,
  RotateCcw,
  ScanSearch,
  ShieldCheck,
  Sparkles,
  UploadCloud,
  WandSparkles,
  X,
  Zap,
} from 'lucide-react'

const navItems = [
  { id: 'scanner', label: 'ATS Scanner', icon: ScanSearch },
  { id: 'rewriter', label: 'Bullet Rewriter', icon: WandSparkles },
  { id: 'humanizer', label: 'Humanizer Shield', icon: ShieldCheck },
  { id: 'export', label: 'Export Resume', icon: FileCheck2 },
]

const weakBullet = 'Responsible for managing the company social media accounts and creating content.'
const strongBullet = 'Spearheaded social media strategy across 4 channels, growing qualified engagement by 42% and increasing inbound leads by 28% in two quarters.'

export default function Page() {
  const [activeView, setActiveView] = useState('scanner')
  const [analyzed, setAnalyzed] = useState(false)
  const [analyzing, setAnalyzing] = useState(false)
  const [uploaded, setUploaded] = useState(false)
  const [resumeText, setResumeText] = useState('Senior Product Designer with 6+ years of experience leading research, design systems, and product strategy for high-growth SaaS teams.')
  const [jobDescription, setJobDescription] = useState('We are looking for a product designer who can lead end-to-end discovery, partner with engineering, and build accessible experiences at scale.')
  const [rewritten, setRewritten] = useState(false)
  const [humanized, setHumanized] = useState(false)
  const [copied, setCopied] = useState(false)
  const [mobileNav, setMobileNav] = useState(false)

  const runAnalysis = () => {
    setAnalyzing(true)
    window.setTimeout(() => {
      setAnalyzing(false)
      setAnalyzed(true)
    }, 1100)
  }

  const copyResume = async () => {
    await navigator.clipboard?.writeText(strongBullet + '\n\n' + resumeText)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  return (
    <main className="min-h-screen bg-[#07111f] text-slate-100">
      <div className="flex min-h-screen">
        <aside className={`fixed inset-y-0 left-0 z-30 flex w-[256px] flex-col border-r border-white/[0.07] bg-[#091525] transition-transform lg:static lg:translate-x-0 ${mobileNav ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex h-[86px] items-center border-b border-white/[0.07] px-7">
            <div className="mr-3 flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-300 to-blue-600 shadow-[0_0_24px_rgba(35,202,255,0.32)]"><ShieldCheck className="size-5 text-[#07111f]" /></div>
            <div><div className="text-[15px] font-semibold tracking-tight">Talent<span className="text-cyan-300">Guard</span></div><div className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500">Intelligence suite</div></div>
          </div>
          <div className="flex flex-1 flex-col px-4 py-7">
            <div className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-600">Workspace</div>
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => { const Icon = item.icon; return <button key={item.id} onClick={() => { setActiveView(item.id); setMobileNav(false) }} className={`group flex items-center gap-3 rounded-lg px-3 py-3 text-left text-[13px] font-medium transition ${activeView === item.id ? 'bg-cyan-400/10 text-cyan-200' : 'text-slate-400 hover:bg-white/[0.04] hover:text-slate-200'}`}><Icon className={`size-[17px] ${activeView === item.id ? 'text-cyan-300' : 'text-slate-500 group-hover:text-slate-300'}`} />{item.label}{activeView === item.id && <span className="ml-auto size-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_#67e8f9]" />}</button> })}
            </nav>
            <div className="mt-auto rounded-xl border border-white/[0.07] bg-white/[0.025] p-4">
              <div className="mb-3 flex items-center justify-between"><span className="text-[11px] text-slate-500">Monthly analyses</span><span className="text-[11px] font-semibold text-slate-300">12 / 50</span></div>
              <div className="mb-3 h-1 overflow-hidden rounded-full bg-slate-800"><div className="h-full w-1/4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" /></div>
              <button className="flex w-full items-center justify-between text-[11px] font-medium text-cyan-300">Upgrade plan <ArrowRight className="size-3" /></button>
            </div>
          </div>
          <div className="border-t border-white/[0.07] p-4"><button className="flex w-full items-center gap-3 rounded-lg p-2 text-left hover:bg-white/[0.04]"><div className="flex size-8 items-center justify-center rounded-full bg-gradient-to-br from-violet-400 to-indigo-600 text-xs font-semibold">JD</div><div className="min-w-0 flex-1"><div className="truncate text-[12px] font-medium">Jordan Davis</div><div className="truncate text-[10px] text-slate-500">Pro workspace</div></div><ChevronDown className="size-3.5 text-slate-600" /></button></div>
        </aside>

        <section className="min-w-0 flex-1">
          <header className="flex h-[86px] items-center justify-between border-b border-white/[0.07] px-5 sm:px-8 lg:px-10">
            <div className="flex items-center gap-3"><button onClick={() => setMobileNav(!mobileNav)} className="rounded-md p-2 text-slate-400 lg:hidden"><Menu className="size-5" /></button><div><div className="flex items-center gap-2 text-[11px] text-slate-500"><LayoutDashboard className="size-3.5" /> Workspace <span>/</span> <span className="text-slate-300">{navItems.find(n => n.id === activeView)?.label}</span></div><h1 className="mt-1 text-xl font-semibold tracking-tight text-white">{activeView === 'scanner' ? 'Resume intelligence' : navItems.find(n => n.id === activeView)?.label}</h1></div></div>
            <div className="flex items-center gap-3"><div className="hidden items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-3 py-1.5 text-[11px] text-emerald-300 sm:flex"><span className="size-1.5 rounded-full bg-emerald-400 shadow-[0_0_7px_#34d399]" /> Systems operational</div><button className="flex size-8 items-center justify-center rounded-lg border border-white/[0.08] text-slate-400 hover:bg-white/[0.05]"><KeyRound className="size-4" /></button></div>
          </header>

          <div className="mx-auto max-w-[1280px] px-5 py-8 sm:px-8 lg:px-10">
            {activeView === 'scanner' && <ScannerView {...{ resumeText, setResumeText, jobDescription, setJobDescription, uploaded, setUploaded, analyzed, analyzing, runAnalysis }} />}
            {activeView === 'rewriter' && <RewriterView rewritten={rewritten} setRewritten={setRewritten} />}
            {activeView === 'humanizer' && <HumanizerView humanized={humanized} setHumanized={setHumanized} />}
            {activeView === 'export' && <ExportView {...{ resumeText, copyResume, copied }} />}
          </div>
        </section>
      </div>
      {mobileNav && <button aria-label="Close menu" onClick={() => setMobileNav(false)} className="fixed inset-0 z-20 bg-black/50 lg:hidden"><X className="absolute right-5 top-7 size-5" /></button>}
    </main>
  )
}

function ScannerView({ resumeText, setResumeText, jobDescription, setJobDescription, uploaded, setUploaded, analyzed, analyzing, runAnalysis }: any) {
  return <div className="animate-in fade-in duration-500"><div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="max-w-xl text-sm leading-6 text-slate-400">Turn your resume into a stronger signal. Scan for ATS compatibility, surface gaps, and align your story to the role.</p></div><div className="flex items-center gap-2 text-[11px] text-slate-500"><LockKeyhole className="size-3.5 text-emerald-400" /> Your data stays private</div></div>
    <div className="grid gap-5 xl:grid-cols-[1fr_360px]">
      <div className="flex flex-col gap-5"><div className="rounded-2xl border border-white/[0.08] bg-[#0c192b] p-5 sm:p-6"><div className="mb-5 flex items-center justify-between"><div><h2 className="text-sm font-semibold text-slate-100">1. Add your resume</h2><p className="mt-1 text-xs text-slate-500">Upload a file or paste your resume content</p></div><span className="rounded-md bg-white/[0.05] px-2 py-1 text-[10px] font-medium text-slate-500">PDF / TXT</span></div><button onClick={() => setUploaded(true)} className={`group flex w-full flex-col items-center justify-center rounded-xl border border-dashed py-9 transition ${uploaded ? 'border-emerald-400/40 bg-emerald-400/[0.04]' : 'border-slate-700 bg-slate-950/30 hover:border-cyan-400/40 hover:bg-cyan-400/[0.03]'}`}><div className={`mb-3 flex size-10 items-center justify-center rounded-xl ${uploaded ? 'bg-emerald-400/10 text-emerald-300' : 'bg-cyan-400/10 text-cyan-300'}`}>{uploaded ? <Check className="size-5" /> : <UploadCloud className="size-5" />}</div><span className="text-xs font-medium text-slate-300">{uploaded ? 'Resume uploaded successfully' : 'Drop your resume here or browse'}</span><span className="mt-1 text-[11px] text-slate-600">Max file size 10MB</span></button><div className="my-4 flex items-center gap-3 text-[10px] uppercase tracking-widest text-slate-700"><div className="h-px flex-1 bg-white/[0.06]" /> or paste text <div className="h-px flex-1 bg-white/[0.06]" /></div><textarea value={resumeText} onChange={e => setResumeText(e.target.value)} className="min-h-[86px] w-full resize-none rounded-lg border border-white/[0.08] bg-slate-950/40 p-3 text-xs leading-5 text-slate-300 outline-none transition placeholder:text-slate-700 focus:border-cyan-400/40" aria-label="Resume text" /></div>
      <div className="rounded-2xl border border-white/[0.08] bg-[#0c192b] p-5 sm:p-6"><div className="mb-5 flex items-center gap-3"><div className="flex size-7 items-center justify-center rounded-lg bg-blue-400/10 text-blue-300"><FileText className="size-4" /></div><div><h2 className="text-sm font-semibold">2. Add the job description</h2><p className="mt-1 text-xs text-slate-500">We&apos;ll compare your resume against this role</p></div></div><textarea value={jobDescription} onChange={e => setJobDescription(e.target.value)} className="min-h-[145px] w-full resize-none rounded-lg border border-white/[0.08] bg-slate-950/40 p-3 text-xs leading-5 text-slate-300 outline-none focus:border-cyan-400/40" aria-label="Job description" /><button onClick={runAnalysis} disabled={analyzing} className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-cyan-300 py-3 text-xs font-bold text-[#07111f] transition hover:bg-cyan-200 disabled:opacity-60">{analyzing ? <RotateCcw className="size-4 animate-spin" /> : <Sparkles className="size-4" />} {analyzing ? 'Parsing your resume...' : 'Analyze match'}</button></div></div>
      <ResultsCard analyzed={analyzed} />
    </div></div>
}

function ResultsCard({ analyzed }: { analyzed: boolean }) { return <div className="rounded-2xl border border-white/[0.08] bg-[#0c192b] p-5 sm:p-6"><div className="mb-6 flex items-start justify-between"><div><div className="mb-1 flex items-center gap-2"><Gauge className="size-4 text-cyan-300" /><h2 className="text-sm font-semibold">Match intelligence</h2></div><p className="text-xs text-slate-500">{analyzed ? 'Analysis complete · tailored to your role' : 'Run a scan to see your score'}</p></div><BarChart3 className="size-4 text-slate-600" /></div><div className="flex flex-col items-center border-b border-white/[0.07] pb-6"><div className="relative flex size-44 items-center justify-center rounded-full" style={{ background: `conic-gradient(#22d3ee ${analyzed ? 316.8 : 0}deg, #17283d 0deg)` }}><div className="flex size-36 flex-col items-center justify-center rounded-full bg-[#0c192b]"><span className="text-4xl font-semibold tracking-tight text-white">{analyzed ? '88' : '--'}</span><span className="text-[10px] uppercase tracking-[0.16em] text-slate-500">out of 100</span></div></div><div className="mt-3 flex items-center gap-2 text-xs text-emerald-300"><span className="size-1.5 rounded-full bg-emerald-400" /> {analyzed ? 'Strong match' : 'Awaiting analysis'}</div></div><div className="pt-5"><div className="mb-3 flex items-center justify-between"><span className="text-xs font-medium text-slate-300">Keyword coverage</span><span className="text-xs font-semibold text-cyan-300">{analyzed ? '84%' : '—'}</span></div><div className="mb-5 h-1.5 rounded-full bg-slate-800"><div className="h-full w-[84%] rounded-full bg-gradient-to-r from-cyan-500 to-blue-500" /></div><div className="mb-2 flex items-center justify-between"><span className="text-[11px] text-slate-500">Top missing keywords</span><span className="text-[10px] text-slate-600">{analyzed ? '3 found' : '—'}</span></div><div className="flex flex-wrap gap-2"><span className="rounded-md border border-amber-400/20 bg-amber-400/[0.06] px-2 py-1 text-[10px] text-amber-200">Figma</span><span className="rounded-md border border-amber-400/20 bg-amber-400/[0.06] px-2 py-1 text-[10px] text-amber-200">A/B testing</span><span className="rounded-md border border-amber-400/20 bg-amber-400/[0.06] px-2 py-1 text-[10px] text-amber-200">Accessibility</span></div></div></div> }

function RewriterView({ rewritten, setRewritten }: { rewritten: boolean; setRewritten: (v: boolean) => void }) { return <div className="animate-in fade-in duration-500"><div className="mb-8"><p className="max-w-xl text-sm leading-6 text-slate-400">Make every line earn its place. Transform responsibilities into sharp, outcome-focused achievements.</p></div><div className="rounded-2xl border border-white/[0.08] bg-[#0c192b] p-5 sm:p-7"><div className="mb-7 flex items-center justify-between"><div><h2 className="text-sm font-semibold">Bullet point enhancer</h2><p className="mt-1 text-xs text-slate-500">AI-powered, metric-driven rewrites</p></div><span className="rounded-full border border-violet-400/20 bg-violet-400/10 px-3 py-1 text-[10px] font-medium text-violet-200"><Zap className="mr-1 inline size-3" /> Pro feature</span></div><div className="grid gap-4 lg:grid-cols-2"><div className="rounded-xl border border-white/[0.07] bg-slate-950/30 p-4"><div className="mb-4 flex items-center justify-between"><span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-500">Original bullet</span><span className="rounded bg-red-400/10 px-2 py-1 text-[10px] text-red-300">Needs work</span></div><p className="text-sm leading-7 text-slate-400">{weakBullet}</p></div><div className="rounded-xl border border-cyan-400/20 bg-cyan-400/[0.04] p-4"><div className="mb-4 flex items-center justify-between"><span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-cyan-300">TalentGuard rewrite</span><span className="rounded bg-emerald-400/10 px-2 py-1 text-[10px] text-emerald-300">High impact</span></div><p className="text-sm leading-7 text-slate-200">{rewritten ? strongBullet : 'Click “Rewrite bullet” to generate a high-impact version.'}</p></div></div><div className="mt-6 flex flex-col justify-between gap-4 border-t border-white/[0.07] pt-5 sm:flex-row sm:items-center"><div className="flex gap-5 text-[11px] text-slate-500"><span><span className="mr-1 text-emerald-300">+42%</span> clarity</span><span><span className="mr-1 text-emerald-300">+3</span> power verbs</span></div><button onClick={() => setRewritten(true)} className="flex items-center justify-center gap-2 rounded-lg bg-cyan-300 px-5 py-2.5 text-xs font-bold text-[#07111f] hover:bg-cyan-200"><WandSparkles className="size-4" /> {rewritten ? 'Rewrite applied' : 'Rewrite bullet'}</button></div></div></div> }

function HumanizerView({ humanized, setHumanized }: { humanized: boolean; setHumanized: (v: boolean) => void }) { return <div className="animate-in fade-in duration-500"><div className="mb-8"><p className="max-w-xl text-sm leading-6 text-slate-400">Keep your expertise. Lose the robotic cadence. Humanizer Shield finds patterns that make writing feel generated and gives your voice room to breathe.</p></div><div className="grid gap-5 xl:grid-cols-[1fr_330px]"><div className="rounded-2xl border border-white/[0.08] bg-[#0c192b] p-5 sm:p-7"><div className="mb-5 flex items-center justify-between"><div><h2 className="text-sm font-semibold">Humanizer Shield</h2><p className="mt-1 text-xs text-slate-500">Paste content to scan for AI-sounding patterns</p></div><div className="flex size-9 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300"><ShieldCheck className="size-5" /></div></div><textarea defaultValue="I am a results-oriented designer who is passionate about leveraging innovative solutions to drive meaningful impact. My proven track record is a testament to my ability to collaborate synergistically across teams." className="min-h-[210px] w-full resize-none rounded-xl border border-white/[0.08] bg-slate-950/40 p-4 text-sm leading-7 text-slate-300 outline-none focus:border-emerald-400/40" aria-label="Content to humanize" /><div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"><div className="flex items-center gap-2 text-xs text-slate-400"><span className="size-2 rounded-full bg-amber-400" /> 4 AI patterns detected</div><button onClick={() => setHumanized(true)} className="flex items-center justify-center gap-2 rounded-lg bg-emerald-300 px-5 py-2.5 text-xs font-bold text-[#07111f] hover:bg-emerald-200"><Sparkles className="size-4" /> {humanized ? 'Content humanized' : 'Humanize content'}</button></div></div><div className="rounded-2xl border border-emerald-400/20 bg-gradient-to-b from-emerald-400/[0.08] to-[#0c192b] p-6"><div className="mb-8 flex items-center justify-between"><span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-emerald-300">Shield status</span><ShieldCheck className="size-4 text-emerald-300" /></div><div className="relative mx-auto flex size-40 items-center justify-center rounded-full" style={{ background: 'conic-gradient(#34d399 0deg 352deg, #132d32 352deg)' }}><div className="flex size-[130px] flex-col items-center justify-center rounded-full bg-[#0d1e2a]"><span className="text-3xl font-semibold text-white">{humanized ? '98%' : '94%'}</span><span className="mt-1 text-[10px] text-slate-500">human likeness</span></div></div><div className="mt-6 rounded-lg border border-emerald-400/20 bg-emerald-400/[0.07] p-3 text-center text-xs font-medium text-emerald-200">{humanized ? 'Natural voice detected' : 'Ready to improve your voice'}</div><p className="mt-4 text-center text-[11px] leading-5 text-slate-500">We identify clichés, cadence patterns, and over-polished phrasing.</p></div></div></div> }

function ExportView({ resumeText, copyResume, copied }: any) { return <div className="animate-in fade-in duration-500"><div className="mb-8"><p className="max-w-xl text-sm leading-6 text-slate-400">Your optimized resume, ready for the next application. Review your changes, then export a clean copy.</p></div><div className="grid gap-5 xl:grid-cols-[1fr_330px]"><div className="rounded-2xl border border-white/[0.08] bg-[#0c192b] p-5 sm:p-7"><div className="mb-5 flex items-center justify-between"><div><h2 className="text-sm font-semibold">Optimized resume preview</h2><p className="mt-1 text-xs text-slate-500">Last updated just now</p></div><span className="flex items-center gap-1.5 text-[10px] text-emerald-300"><Check className="size-3.5" /> All changes saved</span></div><div className="min-h-[410px] rounded-xl border border-white/[0.07] bg-[#f8fafc] p-7 text-slate-800 shadow-2xl shadow-black/20"><div className="border-b border-slate-200 pb-5"><h3 className="text-2xl font-semibold tracking-tight">Jordan Davis</h3><p className="mt-1 text-xs text-slate-500">Senior Product Designer · jordan.davis@email.com · New York, NY</p></div><div className="pt-5"><h4 className="mb-3 text-[10px] font-bold uppercase tracking-[0.16em] text-cyan-700">Professional summary</h4><p className="text-xs leading-5 text-slate-600">{resumeText}</p><h4 className="mb-3 mt-6 text-[10px] font-bold uppercase tracking-[0.16em] text-cyan-700">Experience</h4><p className="text-xs font-semibold text-slate-700">Product Designer · Northstar Labs</p><p className="mt-2 border-l-2 border-cyan-500 pl-3 text-xs leading-5 text-slate-600">{strongBullet}</p></div></div></div><div className="flex h-fit flex-col gap-3 rounded-2xl border border-white/[0.08] bg-[#0c192b] p-5"><div className="mb-2 text-xs font-semibold text-slate-200">Export options</div><button onClick={() => alert('Your optimized TXT resume is ready to download.')} className="flex items-center justify-between rounded-lg border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-left text-xs text-slate-300 hover:bg-white/[0.07]"><span className="flex items-center gap-3"><FileText className="size-4 text-cyan-300" /> Download .TXT</span><ArrowRight className="size-3.5 text-slate-600" /></button><button onClick={() => alert('Your optimized PDF resume is ready to download.')} className="flex items-center justify-between rounded-lg border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-left text-xs text-slate-300 hover:bg-white/[0.07]"><span className="flex items-center gap-3"><FileCheck2 className="size-4 text-violet-300" /> Download .PDF</span><ArrowRight className="size-3.5 text-slate-600" /></button><button onClick={copyResume} className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-cyan-300 py-3 text-xs font-bold text-[#07111f] hover:bg-cyan-200"><Clipboard className="size-4" /> {copied ? 'Copied to clipboard' : 'Copy to clipboard'}</button><p className="mt-3 text-center text-[10px] leading-4 text-slate-600">Your export is formatted for ATS readability and human review.</p></div></div></div> }
