(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/sanity/env.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "apiVersion",
    ()=>apiVersion,
    "dataset",
    ()=>dataset,
    "projectId",
    ()=>projectId,
    "useCdn",
    ()=>useCdn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const apiVersion = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-01';
const dataset = assertValue(("TURBOPACK compile-time value", "production") || 'production', 'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET');
const projectId = assertValue(("TURBOPACK compile-time value", "j8mqxj28") || 'demo', 'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID');
const useCdn = false;
function assertValue(v, errorMessage) {
    if (v === undefined) {
        throw new Error(errorMessage);
    }
    return v;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sanity/schemaTypes/linktreeSettingsType.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "linktreeSettingsType",
    ()=>linktreeSettingsType
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/types/lib/index.js [app-client] (ecmascript)");
;
const linktreeSettingsType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineType"])({
    name: 'linktreeSettings',
    title: 'Linktree Settings',
    type: 'document',
    groups: [
        {
            name: 'content',
            title: '1. Konten Utama',
            default: true
        },
        {
            name: 'appearance',
            title: '2. Tampilan & Desain'
        },
        {
            name: 'seo',
            title: '3. SEO & Metadata'
        }
    ],
    fields: [
        // --- SEO ---
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'seoTitle',
            title: 'Meta Title (SEO)',
            description: 'Judul yang muncul di tab browser (misal: Links | Radeva Organizer)',
            type: 'string',
            group: 'seo'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'seoDescription',
            title: 'Meta Description (SEO)',
            description: 'Deskripsi singkat web untuk pencarian Google.',
            type: 'text',
            group: 'seo'
        }),
        // --- KONTEN UTAMA ---
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'headerBanner',
            title: 'Header Banner / Cover',
            description: 'Gambar spanduk opsional di bagian paling atas kotak (seperti header Twitter/X).',
            type: 'image',
            options: {
                hotspot: true
            },
            group: 'content'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'profileName',
            title: 'Profile Name',
            type: 'string',
            initialValue: 'WTP Event Organizer',
            group: 'content'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'verifiedBadge',
            title: 'Tampilkan Centang Biru (Verified Badge)',
            type: 'boolean',
            initialValue: false,
            group: 'content'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'profileImage',
            title: 'Profile Image',
            type: 'image',
            options: {
                hotspot: true
            },
            group: 'content'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'location',
            title: 'Location Text',
            type: 'string',
            initialValue: 'Semarang & Jawa Tengah',
            group: 'content'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'hideLocation',
            title: 'Sembunyikan Lokasi?',
            type: 'boolean',
            initialValue: false,
            group: 'content'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'heroText',
            title: 'Hero / Greeting Text',
            type: 'text',
            initialValue: 'Hai! Let us be the part of your BIG DAY!',
            group: 'content'
        }),
        // --- TOMBOL & SOSMED ---
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'socialLinks',
            title: 'Mini Social Icons',
            type: 'array',
            group: 'content',
            of: [
                {
                    type: 'object',
                    fields: [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
                            name: 'platform',
                            title: 'Platform',
                            type: 'string',
                            options: {
                                list: [
                                    'email',
                                    'instagram',
                                    'tiktok',
                                    'spotify',
                                    'whatsapp',
                                    'youtube',
                                    'facebook',
                                    'twitter'
                                ]
                            }
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
                            name: 'url',
                            title: 'URL Tujuan',
                            type: 'string'
                        })
                    ]
                }
            ]
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'socialPosition',
            title: 'Posisi Icon Sosmed',
            type: 'string',
            options: {
                list: [
                    {
                        title: 'Di Atas (Bawah Nama Profil)',
                        value: 'top'
                    },
                    {
                        title: 'Di Bawah (Di Atas Footer)',
                        value: 'bottom'
                    }
                ]
            },
            initialValue: 'top',
            group: 'appearance'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'links',
            title: 'Links List (Tombol Utama)',
            description: 'Tambah, urutkan (drag), atau edit link memanjang.',
            type: 'array',
            group: 'content',
            of: [
                {
                    type: 'object',
                    fields: [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
                            name: 'title',
                            title: 'Title / Teks',
                            type: 'string'
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
                            name: 'url',
                            title: 'URL Target',
                            type: 'url',
                            validation: (Rule)=>Rule.uri({
                                    allowRelative: true
                                }),
                            hidden: ({ parent })=>parent?.type === 'divider' || parent?.type === 'newsletter' || parent?.type === 'countdown' || parent?.type === 'bank'
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
                            name: 'type',
                            title: 'Format Link',
                            type: 'string',
                            options: {
                                list: [
                                    {
                                        title: 'Normal Button Link',
                                        value: 'link'
                                    },
                                    {
                                        title: 'Portfolio Grid Image',
                                        value: 'portfolio'
                                    },
                                    {
                                        title: 'Section Divider (Teks Pemisah)',
                                        value: 'divider'
                                    },
                                    {
                                        title: 'Newsletter Subscribe Box',
                                        value: 'newsletter'
                                    },
                                    {
                                        title: 'Countdown Timer Widget',
                                        value: 'countdown'
                                    },
                                    {
                                        title: 'Rekening / Kado Digital Widget',
                                        value: 'bank'
                                    }
                                ],
                                layout: 'radio'
                            },
                            initialValue: 'link'
                        }),
                        // Countdown Fields
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
                            name: 'countdownDate',
                            title: 'Target Tanggal & Waktu (Untuk Countdown)',
                            type: 'datetime',
                            hidden: ({ parent })=>parent?.type !== 'countdown'
                        }),
                        // Bank / Digital Gift Fields
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
                            name: 'bankName',
                            title: 'Nama Bank / E-Wallet (BCA/Mandiri/Gopay)',
                            type: 'string',
                            hidden: ({ parent })=>parent?.type !== 'bank'
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
                            name: 'bankAccountNumber',
                            title: 'Nomor Rekening / HP',
                            type: 'string',
                            hidden: ({ parent })=>parent?.type !== 'bank'
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
                            name: 'bankAccountName',
                            title: 'Atas Nama',
                            type: 'string',
                            hidden: ({ parent })=>parent?.type !== 'bank'
                        }),
                        // Link Fields
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
                            name: 'icon',
                            title: 'Icon (Opsional)',
                            type: 'image',
                            hidden: ({ parent })=>parent?.type === 'divider' || parent?.type === 'newsletter' || parent?.type === 'countdown' || parent?.type === 'bank'
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
                            name: 'badgeText',
                            title: 'Teks Badge (Contoh: PROMO, NEW)',
                            type: 'string',
                            hidden: ({ parent })=>parent?.type !== 'link'
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
                            name: 'badgeColor',
                            title: 'Warna Badge',
                            type: 'string',
                            options: {
                                list: [
                                    'merah',
                                    'hijau',
                                    'biru',
                                    'kuning'
                                ]
                            },
                            initialValue: 'merah',
                            hidden: ({ parent })=>!parent?.badgeText
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
                            name: 'isHighlighted',
                            title: 'Highlight Animasi Kelap-Kelip?',
                            type: 'boolean',
                            initialValue: false,
                            hidden: ({ parent })=>parent?.type !== 'link'
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
                            name: 'isActive',
                            title: 'Aktif?',
                            type: 'boolean',
                            initialValue: true
                        })
                    ]
                }
            ]
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'footerText',
            title: 'Footer Text',
            type: 'string',
            initialValue: 'WTP Event Organizer',
            group: 'content'
        }),
        // --- TAMPILAN & DESAIN ---
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'themeColor',
            title: 'Tema Warna Global (Background)',
            description: 'Pilih warna latar belakang utama halaman Linktree Anda.',
            type: 'color',
            options: {
                disableAlpha: true
            },
            group: 'appearance'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'fontColor',
            title: 'Warna Font (Teks)',
            description: 'Pilih warna teks/tulisan. Jika dikosongkan, sistem akan menyesuaikan otomatis.',
            type: 'color',
            options: {
                disableAlpha: true
            },
            group: 'appearance'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'verifiedBadgeColor',
            title: 'Warna Ikon Verified',
            type: 'color',
            group: 'appearance'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'backgroundImage',
            title: 'Custom Background Image',
            description: 'Akan menimpa warna tema jika diisi.',
            type: 'image',
            options: {
                hotspot: true
            },
            group: 'appearance'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'backgroundVideo',
            title: 'Custom Background Video (MP4)',
            description: 'Video berputar otomatis di latar belakang. Menggantikan Image Background.',
            type: 'file',
            options: {
                accept: 'video/mp4'
            },
            group: 'appearance'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'backgroundMusic',
            title: 'Backsound / Musik Latar (MP3)',
            description: 'Lagu otomatis diputar (dengan tombol interaktif) untuk kesan romantis/aesthetic.',
            type: 'file',
            options: {
                accept: 'audio/mpeg,audio/wav'
            },
            group: 'appearance'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'particleEffect',
            title: 'Efek Salju / Kelopak Bunga (Partikel Ajaib)',
            description: 'Tambahkan efek magis yang berjatuhan/melayang di layar.',
            type: 'string',
            options: {
                list: [
                    {
                        title: 'Tidak Ada',
                        value: 'none'
                    },
                    {
                        title: 'Kelopak Sakura',
                        value: 'sakura'
                    },
                    {
                        title: 'Salju Romantis',
                        value: 'snow'
                    },
                    {
                        title: 'Cahaya Keemasan (Golden Glow)',
                        value: 'glow'
                    }
                ]
            },
            initialValue: 'none',
            group: 'appearance'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'fontFamily',
            title: 'Gaya Font (Tipografi)',
            type: 'string',
            options: {
                list: [
                    {
                        title: 'Modern (Inter)',
                        value: 'sans'
                    },
                    {
                        title: 'Poppins (Semi-Round)',
                        value: 'poppins'
                    },
                    {
                        title: 'Klasik/Elegan (Serif)',
                        value: 'serif'
                    },
                    {
                        title: 'Mesin Tik (Mono)',
                        value: 'mono'
                    }
                ]
            },
            initialValue: 'sans',
            group: 'appearance'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'buttonHoverAnimation',
            title: 'Animasi Hover Tombol',
            type: 'string',
            options: {
                list: [
                    {
                        title: 'Membesar (Scale-up)',
                        value: 'scale'
                    },
                    {
                        title: 'Melompat (Bounce)',
                        value: 'bounce'
                    },
                    {
                        title: 'Bersinar (Pulse Glow)',
                        value: 'pulse'
                    }
                ]
            },
            initialValue: 'scale',
            group: 'appearance'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'buttonStyle',
            title: 'Gaya Tombol Utama',
            type: 'string',
            options: {
                list: [
                    {
                        title: 'Kaca Transparan (Glassmorphism)',
                        value: 'glass'
                    },
                    {
                        title: 'Warna Solid (Penuh)',
                        value: 'solid'
                    },
                    {
                        title: 'Garis Luar (Outline)',
                        value: 'outline'
                    }
                ]
            },
            initialValue: 'glass',
            group: 'appearance'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'buttonShape',
            title: 'Bentuk Tombol',
            type: 'string',
            options: {
                list: [
                    {
                        title: 'Pil (Bulat Penuh)',
                        value: 'rounded-full'
                    },
                    {
                        title: 'Tumpul (Rounded)',
                        value: 'rounded-xl'
                    },
                    {
                        title: 'Kotak (Square)',
                        value: 'rounded-none'
                    }
                ]
            },
            initialValue: 'rounded-full',
            group: 'appearance'
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$types$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineField"])({
            name: 'profileShape',
            title: 'Bentuk Foto Profil',
            type: 'string',
            options: {
                list: [
                    {
                        title: 'Lingkaran',
                        value: 'rounded-full'
                    },
                    {
                        title: 'Tumpul',
                        value: 'rounded-2xl'
                    },
                    {
                        title: 'Kotak',
                        value: 'rounded-none'
                    }
                ]
            },
            initialValue: 'rounded-full',
            group: 'appearance'
        })
    ]
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sanity/schemaTypes/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "schema",
    ()=>schema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$linktreeSettingsType$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/schemaTypes/linktreeSettingsType.ts [app-client] (ecmascript)");
;
const schema = {
    types: [
        __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$linktreeSettingsType$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["linktreeSettingsType"]
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sanity.config.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\app\studio\[[...tool]]\page.tsx` route
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/sanity/lib/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$color$2d$input$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/color-input/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$_chunks$2d$es$2f$pane$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sanity/lib/_chunks-es/pane.js [app-client] (ecmascript)");
// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/env.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/schemaTypes/index.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["defineConfig"])({
    basePath: '/studio',
    projectId: __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectId"],
    dataset: __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataset"],
    // Add and edit the content schema in the './sanity/schemaTypes' folder
    schema: __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"],
    plugins: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$_chunks$2d$es$2f$pane$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["structureTool"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$color$2d$input$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorInput"])()
    ]
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_8881a61c._.js.map