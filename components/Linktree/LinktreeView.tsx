'use client'

import { useState, useRef, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { 
  BadgeCheck, Play, Pause, MapPin, ExternalLink, Mail, Instagram, Twitter, 
  Facebook, Youtube, Music2, MessageCircle, Copy, Check, Clock, Send, 
  CreditCard 
} from 'lucide-react'
import { urlForImage, getFileUrl } from '@/sanity/lib/image'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
})

const socialIcons: any = {
  email: Mail,
  instagram: Instagram,
  tiktok: Music2,
  whatsapp: MessageCircle,
  youtube: Youtube,
  facebook: Facebook,
  twitter: Twitter,
  spotify: Music2,
}

// ─── Particle Components ───
const Particles = ({ type }: { type: string }) => {
  if (type === 'none') return null

  const items = Array.from({ length: 20 })

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {items.map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            x: Math.random() * 100 + '%', 
            y: -20, 
            rotate: 0,
            opacity: Math.random() * 0.5 + 0.3 
          }}
          animate={{ 
            y: '110vh', 
            x: (Math.random() * 100 - 10) + '%',
            rotate: 360,
            transition: { 
              duration: Math.random() * 10 + 10, 
              repeat: Infinity, 
              ease: "linear",
              delay: Math.random() * 10 
            }
          }}
          className="absolute"
        >
          {type === 'sakura' && (
            <div className="w-4 h-4 bg-pink-200/40 rounded-full blur-[1px]" 
                 style={{ borderRadius: '80% 10% 85% 10%' }} />
          )}
          {type === 'snow' && (
            <div className="w-2 h-2 bg-white/60 rounded-full blur-[1px]" />
          )}
          {type === 'glow' && (
            <div className="w-3 h-3 bg-amber-200/30 rounded-full blur-[4px]" />
          )}
        </motion.div>
      ))}
    </div>
  )
}

// ─── Countdown Component ───
const CountdownTimer = ({ targetDate }: { targetDate: string }) => {
  const [timeLeft, setTimeLeft] = useState<{ d: number, h: number, m: number, s: number } | null>(null)

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = new Date(targetDate).getTime() - now

      if (distance < 0) {
        clearInterval(timer)
        setTimeLeft({ d: 0, h: 0, m: 0, s: 0 })
        return
      }

      setTimeLeft({
        d: Math.floor(distance / (1000 * 60 * 60 * 24)),
        h: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        m: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        s: Math.floor((distance % (1000 * 60)) / 1000)
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [targetDate])

  if (!timeLeft) return null

  return (
    <div className="grid grid-cols-4 gap-2 w-full py-6 px-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 mb-4">
      {[
        { label: 'Days', val: timeLeft.d },
        { label: 'Hours', val: timeLeft.h },
        { label: 'Mins', val: timeLeft.m },
        { label: 'Secs', val: timeLeft.s }
      ].map(t => (
        <div key={t.label} className="flex flex-col items-center">
          <span className="text-xl font-bold">{t.val.toString().padStart(2, '0')}</span>
          <span className="text-[10px] uppercase opacity-60 font-bold tracking-widest">{t.label}</span>
        </div>
      ))}
    </div>
  )
}

// ─── Bank Card Component ───
const BankCard = ({ data }: { data: any }) => {
  const [copied, setCopied] = useState(false)
  const handleCopy = () => {
    navigator.clipboard.writeText(data.bankAccountNumber)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="w-full bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl border border-white/30 rounded-2xl p-6 mb-4 shadow-xl">
      <div className="flex justify-between items-start mb-6">
        <div className="flex flex-col">
          <span className="text-xs opacity-60 font-bold uppercase tracking-wider mb-1">Digital Gift</span>
          <span className="text-lg font-bold tracking-tight">{data.bankName}</span>
        </div>
        <CreditCard className="w-6 h-6 opacity-40" />
      </div>
      
      <div className="flex flex-col gap-1 mb-6">
        <span className="text-xs opacity-50 font-medium">Nomor Rekening:</span>
        <div className="flex items-center justify-between group">
          <span className="text-xl font-mono tracking-wider font-semibold">{data.bankAccountNumber}</span>
          <button onClick={handleCopy} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
            {copied ? <Check className="w-5 h-5 text-green-400" /> : <Copy className="w-5 h-5 opacity-60 group-hover:opacity-100" />}
          </button>
        </div>
      </div>

      <div className="flex flex-col">
          <span className="text-[10px] opacity-40 uppercase font-bold tracking-widest">Atas Nama</span>
          <span className="font-bold text-sm">{data.bankAccountName || 'WTP Event Organizer'}</span>
      </div>
    </div>
  )
}

// ─── Newsletter Component ───
const NewsletterBox = () => {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')

  const handleSubmit = (e: any) => {
    e.preventDefault()
    setStatus('loading')
    setTimeout(() => {
      setStatus('success')
      setEmail('')
      setTimeout(() => setStatus('idle'), 3000)
    }, 1500)
  }

  return (
    <div className="w-full bg-white text-gray-900 rounded-2xl p-6 mb-4 shadow-xl">
      <h3 className="text-lg font-bold mb-1">Exclusive Newsletter</h3>
      <p className="text-xs text-gray-500 mb-4">Dapatkan info promo dan inspirasi event setiap minggunya.</p>
      
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input 
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          className="flex-1 bg-gray-100 rounded-xl px-4 text-sm outline-none focus:ring-2 focus:ring-pink-400"
        />
        <button 
          disabled={status !== 'idle'}
          className="bg-gray-900 text-white p-3 rounded-xl hover:bg-black transition-all disabled:opacity-50"
        >
          {status === 'loading' ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : 
            status === 'success' ? <Check className="w-5 h-5" /> : <Send className="w-5 h-5" />}
        </button>
      </form>
    </div>
  )
}

// ─── Main View ───
export default function LinktreeView({ data }: { data: any }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const musicUrl = data.backgroundMusic ? getFileUrl(data.backgroundMusic) : null
  const videoUrl = data.backgroundVideo ? getFileUrl(data.backgroundVideo) : null

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  // Helper for auto-contrast
  const getAutoContrastColor = (hex: string) => {
    const r = parseInt(hex.slice(1, 3), 16)
    const g = parseInt(hex.slice(3, 5), 16)
    const b = parseInt(hex.slice(5, 7), 16)
    const yiq = (r * 299 + g * 587 + b * 114) / 1000
    return yiq >= 128 ? '#111827' : '#ffffff' // Dark gray or White
  }

  // Theme classes
  const getThemeClasses = () => {
    // Handle new color picker object {hex: string}
    if (data.themeColor?.hex) {
      const customFontColor = data.fontColor?.hex || getAutoContrastColor(data.themeColor.hex)
      return { 
        bg: '', // Handled via inline style
        customBg: data.themeColor.hex,
        customText: customFontColor,
        text: '', // Handled via inline style
        textSub: 'opacity-70', 
        cardBg: 'bg-white/15 backdrop-blur-md border-white/20' 
      }
    }

    switch(data.themeColor) {
      case 'dark': return { bg: 'bg-gray-900', text: 'text-white', textSub: 'text-white/70', cardBg: 'bg-white/15 backdrop-blur-md border-white/20' }
      case 'wtp-pink': return { bg: 'bg-[#fdbcd6]', text: 'text-gray-900', textSub: 'text-gray-700', cardBg: 'bg-white/40 backdrop-blur-md border-pink-200/40' }
      case 'gold': return { bg: 'bg-amber-100', text: 'text-amber-900', textSub: 'text-amber-700', cardBg: 'bg-white/40 backdrop-blur-md border-amber-200/40' }
      default: return { bg: 'bg-gray-50', text: 'text-gray-900', textSub: 'text-gray-500', cardBg: 'bg-gray-100/80 border-gray-200/60' }
    }
  }

  const theme = getThemeClasses()

  const getButtonRadius = () => {
    if(data.buttonShape === 'rounded-none') return 'rounded-none'
    if(data.buttonShape === 'rounded-xl') return 'rounded-xl'
    return 'rounded-full'
  }

  const getButtonStyle = () => {
    const radius = getButtonRadius()
    if (data.buttonStyle === 'glass') {
      return `${radius} bg-white/15 backdrop-blur-md border border-white/20 shadow-lg text-inherit`
    } else if (data.buttonStyle === 'outline') {
      return `${radius} border-2 border-current bg-transparent`
    } else {
      return `${radius} bg-white text-gray-900 shadow-md`
    }
  }

  const getHoverAnimation = () => {
    if(data.buttonHoverAnimation === 'bounce') return { y: -4 }
    if(data.buttonHoverAnimation === 'pulse') return { scale: 1.03, boxShadow: '0 0 20px rgba(255,255,255,0.3)' }
    return { scale: 1.02 }
  }

  const getProfileShape = () => {
    if(data.profileShape === 'rounded-none') return 'rounded-none'
    if(data.profileShape === 'rounded-2xl') return 'rounded-2xl'
    return 'rounded-full'
  }

  const getBadgeColor = () => {
    if (data.verifiedBadgeColor?.hex) return data.verifiedBadgeColor.hex
    
    if(data.verifiedBadgeColor === 'gold') return '#fbbf24' // text-yellow-400
    if(data.verifiedBadgeColor === 'pink') return '#f472b6' // text-pink-400
    if(data.verifiedBadgeColor === 'black') return '#111827' // text-gray-900
    return '#3b82f6' // text-blue-500
  }

  const badgeColorMap: any = {
    merah: 'bg-red-500',
    hijau: 'bg-green-500',
    biru: 'bg-blue-500',
    kuning: 'bg-yellow-500',
  }

  const portfolioLinks = data.links?.filter((l: any) => l.type === 'portfolio' && l.isActive) || []
  const primaryLinks = data.links?.filter((l: any) => l.type !== 'portfolio' && l.isActive) || []

  const fontClass = data.fontFamily === 'serif' ? 'font-serif' : 
                   data.fontFamily === 'mono' ? 'font-mono' : 
                   data.fontFamily === 'poppins' ? poppins.className : 'font-sans'

  return (
    <div 
      className={`min-h-screen w-full relative overflow-x-hidden ${theme.bg} ${theme.text} ${fontClass}`}
      style={{
        ...(theme.customBg ? { backgroundColor: theme.customBg } : {}),
        ...(theme.customText ? { color: theme.customText } : {})
      }}
    >
      
      {/* ─── Background Layer ─── */}
      <div className="fixed inset-0 z-0">
        {/* Decorative Blobs for premium feel */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ 
              x: [0, 50, 0], 
              y: [0, -30, 0],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full opacity-20 blur-[120px]"
            style={{ backgroundColor: theme.customBg || '#fdbcd6' }}
          />
          <motion.div 
            animate={{ 
              x: [0, -40, 0], 
              y: [0, 60, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-[40%] -right-[10%] w-[60%] h-[60%] rounded-full opacity-15 blur-[130px]"
            style={{ backgroundColor: theme.customBg || '#3b82f6' }}
          />
        </div>

        {videoUrl ? (
          <video 
            src={videoUrl} 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover blur-[8px] opacity-40 scale-105"
          />
        ) : data.backgroundImage ? (
          <Image 
            src={urlForImage(data.backgroundImage).url()} 
            alt="Background" 
            fill 
            className="object-cover blur-[8px] opacity-40 scale-105"
          />
        ) : null}
        
        {/* Gradient Overlay for more depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10" />
        
        {/* Noise overlay could be added here if we had the asset, but sticking to solid readability overlay */}
        {(videoUrl || data.backgroundImage) && (
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        )}
      </div>

      {/* ─── Particle Effects ─── */}
      <Particles type={data.particleEffect || 'none'} />

      {/* ─── Floating Music Button ─── */}
      {musicUrl && (
        <>
          <audio ref={audioRef} src={musicUrl} loop />
          <motion.button
            onClick={togglePlay}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-white/20 backdrop-blur-xl border border-white/30 rounded-full flex items-center justify-center shadow-2xl overflow-hidden group"
          >
            {isPlaying && (
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-tr from-pink-400/20 to-transparent"
              />
            )}
            {isPlaying ? <Pause className="w-6 h-6 z-10" /> : <Music2 className="w-6 h-6 z-10" />}
          </motion.button>
        </>
      )}

      {/* ─── Scrollable Content ─── */}
      <div className="relative z-10 w-full flex flex-col items-center min-h-screen">
        
        {/* Single Centered Column — matches Radeva max-w-[480px] pb-12 */}
        <div className="w-full max-w-[480px] min-h-screen bg-transparent flex flex-col items-center pb-12 relative">

          {/* Header Banner — Radeva: h-36 md:h-44 mb-[-50px] with bottom gradient */}
          {data.headerBanner && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="w-full h-36 md:h-44 relative overflow-hidden shadow-sm mb-[-50px]"
            >
              <Image 
                src={urlForImage(data.headerBanner).url()} 
                alt="Banner" 
                fill 
                className="object-cover"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent" />
            </motion.div>
          )}

          {/* Content wrapper — Radeva: px-6 gap-6 */}
          <div className={`w-full px-6 flex flex-col items-center gap-6 ${data.headerBanner ? 'mt-0' : 'pt-12'}`}>
            
            {/* Profile Header */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="flex flex-col items-center gap-4 relative"
            >
              {/* Profile Image — Radeva: w-28 h-28 border-4 border-white/50 */}
              {data.profileImage && (
                <div className={`w-28 h-28 ${getProfileShape()} overflow-hidden shadow-xl bg-black/10 flex items-center justify-center border-4 border-white/50 bg-clip-padding relative z-10`}>
                  <Image 
                    src={urlForImage(data.profileImage).url()} 
                    alt={data.profileName || 'Profile'} 
                    fill 
                    className="object-cover"
                  />
                </div>
              )}

              {/* Name & Location — Radeva: text-[22px] font-bold, location text-[13.5px] */}
              <div className="text-center px-4">
                <h1 className="text-[22px] font-bold tracking-tight text-center">
                  {data.profileName}
                  {data.verifiedBadge && (
                    <span className="inline-block align-middle ml-1.5" style={{ marginTop: '-3px' }}>
                      <div className="relative flex items-center justify-center flex-shrink-0 inline-flex">
                        <BadgeCheck 
                          className="w-[18px] h-[18px] fill-current" 
                          style={{ color: getBadgeColor() }} 
                        />
                        <Check className="absolute w-2.5 h-2.5 text-white stroke-[4]" />
                      </div>
                    </span>
                  )}
                </h1>
                {!data.hideLocation && data.location && (
                  <div className={`flex items-center justify-center gap-1.5 opacity-80 mt-1 text-[13.5px] font-medium ${theme.textSub}`}>
                    <MapPin className="w-[14px] h-[14px]" />
                    <span>{data.location}</span>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Social Icons Mini (TOP) — Radeva: p-2.5 bg-black/5 rounded-full */}
            {data.socialPosition === 'top' && data.socialLinks?.length > 0 && (
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="flex items-center justify-center gap-4 mt-[-4px]"
              >
                {data.socialLinks.map((social: any, idx: number) => {
                  const Icon = socialIcons[social.platform] || ExternalLink
                  return (
                    <motion.a 
                      key={idx} 
                      href={social.url} 
                      target="_blank" 
                      rel="noreferrer"
                      whileHover={{ y: -3 }}
                      className="p-2.5 bg-black/5 hover:bg-black/10 rounded-full transition hover:-translate-y-1"
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  )
                })}
              </motion.div>
            )}

            {/* Hero Card — Radeva: px-6 py-5 rounded-2xl text-[14.5px] */}
            {data.heroText && (
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className={`w-full backdrop-blur-md border px-6 py-5 rounded-2xl shadow-sm text-center ${theme.cardBg}`}
              >
                <p className="text-[14.5px] font-medium leading-relaxed opacity-90">
                  {data.heroText}
                </p>
              </motion.div>
            )}

            {/* Button Links & Widgets — Radeva: gap-4 mt-2 */}
            <div className="w-full flex flex-col gap-4 mt-2">
              {primaryLinks.map((link: any, idx: number) => {
                
                // Divider — Radeva: text-[13px] tracking-[0.2em] mt-5 mb-1
                if (link.type === 'divider') {
                  return (
                    <div key={link._key || idx} className="w-full text-center mt-5 mb-1">
                      <h3 className="text-[13px] font-extrabold tracking-[0.2em] uppercase opacity-70">
                        {link.title}
                      </h3>
                    </div>
                  )
                }

                // Widgets
                if (link.type === 'countdown') return <CountdownTimer key={link._key} targetDate={link.countdownDate} />
                if (link.type === 'bank') return <BankCard key={link._key} data={link} />
                if (link.type === 'newsletter') return <NewsletterBox key={link._key} />

                // Standard Link — Radeva: p-[18px] text-[15px]
                return (
                  <motion.div 
                    key={link._key || idx} 
                    className="relative w-full group"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 + (idx * 0.1), duration: 0.6 }}
                  >
                    {/* Badge — Radeva: -top-3 -right-2 text-[10px] animate-bounce */}
                    {link.badgeText && (
                      <div className={`absolute -top-3 -right-2 px-2.5 py-[3px] rounded-md text-[10px] font-bold text-white shadow-sm z-10 animate-bounce ${badgeColorMap[link.badgeColor] || 'bg-red-500'}`}>
                        {link.badgeText}
                      </div>
                    )}

                    <motion.a
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className={`relative w-full flex items-center justify-center py-6 px-8 overflow-hidden transition-all duration-300 border shadow-sm ${getButtonStyle()}`}
                      whileHover={getHoverAnimation()}
                      whileTap={{ scale: 0.96 }}
                    >
                      {link.isHighlighted && (
                        <motion.div 
                          animate={{ x: ['-100%', '200%'] }} 
                          transition={{ repeat: Infinity, duration: 2.2, ease: "linear" }}
                          className="absolute inset-0 w-1/4 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-25deg] pointer-events-none"
                        />
                      )}

                      {/* Icon — contained within circle like Radeva */}
                      {link.icon && (
                        <div className="absolute left-3.5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/10 overflow-hidden flex items-center justify-center">
                          <div className="relative w-6 h-6">
                            <Image src={urlForImage(link.icon).url()} alt="" fill className="object-contain" />
                          </div>
                        </div>
                      )}
                      
                      {/* Text — Radeva: text-[15.5px] font-semibold tracking-wide px-12 */}
                      <span className="font-semibold text-[15.5px] tracking-wide relative px-12 text-center leading-tight">{link.title}</span>
                    </motion.a>
                  </motion.div>
                )
              })}
            </div>

            {/* Portfolio Grid — Radeva: aspect-[4/5] gap-4, title text-lg mb-5 */}
            {portfolioLinks.length > 0 && (
              <div className="w-full mt-6">
                <motion.h2 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  className="text-center font-bold text-lg mb-5 tracking-tight"
                >
                  Our Portofolio
                </motion.h2>
                <div className="grid grid-cols-2 gap-4">
                  {portfolioLinks.map((link: any, idx: number) => (
                    <motion.a 
                      key={link._key || idx}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className={`group relative aspect-[4/5] overflow-hidden shadow-sm bg-black/10 block border border-white/20 ${getButtonRadius()}`}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.3 + (idx * 0.1), duration: 0.6 }}
                      whileHover={{ y: -5 }}
                    >
                      {link.icon && (
                        <Image 
                          src={urlForImage(link.icon).url()} 
                          alt={link.title || ''} 
                          fill 
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      )}
                      <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                        <span className="block text-center text-white/95 font-medium text-sm pt-8">{link.title}</span>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            )}

            {/* Social Icons Mini (BOTTOM) — Radeva: gap-4 mt-6 mb-2 */}
            {data.socialPosition === 'bottom' && data.socialLinks?.length > 0 && (
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.6 }}
                className="flex items-center justify-center gap-4 mt-6 mb-2"
              >
                {data.socialLinks.map((social: any, idx: number) => {
                  const Icon = socialIcons[social.platform] || ExternalLink
                  return (
                    <motion.a 
                      key={idx} 
                      href={social.url} 
                      target="_blank" 
                      rel="noreferrer"
                      whileHover={{ y: -3 }}
                      className="p-2.5 bg-black/5 hover:bg-black/10 rounded-full transition hover:-translate-y-1"
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  )
                })}
              </motion.div>
            )}

            {/* Footer — Radeva: mt-6 mb-4 text-xs font-bold tracking-widest opacity-60 */}
            {data.footerText && (
              <motion.footer 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ delay: 1.6, duration: 0.6 }}
                className="mt-6 mb-4 text-center flex items-center justify-center gap-2 text-xs font-bold tracking-widest uppercase"
              >
                <span>{data.footerText}</span>
              </motion.footer>
            )}

          </div> {/* end content wrapper */}
        </div> {/* end centered column */}
      </div> {/* end scrollable wrapper */}
    </div>
  )
}
