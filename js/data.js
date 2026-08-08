/**
 * NAGI FILM - Works Dataset
 * Fictional portfolio works for a cinematic visual director.
 */
const WORKS_DATA = [
  {
    id: "echoes",
    title: "ECHOES",
    category: "Short Film",
    year: "2026",
    thumbnail: "assets/images/echoes.jpg",
    aspectRatio: "16-9",
    description: "沈黙と眼差しが紡ぎ出す、言葉にならない感情のポートレート。モノトーンの光と影で描く、静かなる映像詩。架空国際映画祭での最優秀短編賞選出作品。",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&playlist=dQw4w9WgXcQ&controls=0&showinfo=0&rel=0&modestbranding=1"
  },
  {
    id: "blue-hour",
    title: "BLUE HOUR",
    category: "Music Video",
    year: "2026",
    thumbnail: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=85",
    aspectRatio: "16-9",
    description: "夜から朝へと移り変わる瞬間の『青』を捉えたミュージックビデオ。オルタナティブ・ロック・バンド「SILENT LIGHT」の楽曲に寄せた、孤独と夜明けの物語。",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&playlist=dQw4w9WgXcQ&controls=0&showinfo=0&rel=0&modestbranding=1"
  },
  {
    id: "distance",
    title: "DISTANCE",
    category: "Commercial Film",
    year: "2025",
    thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=85",
    aspectRatio: "16-9",
    description: "アパレルブランド「KOTONHA」の秋冬コレクションに向けたブランドムービー。都会の雑踏と個人の距離感、および触れ合う瞬間を優しくエモーショナルに映し出す。",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&playlist=dQw4w9WgXcQ&controls=0&showinfo=0&rel=0&modestbranding=1"
  },
  {
    id: "after-rain",
    title: "AFTER RAIN",
    category: "Short Film",
    year: "2025",
    thumbnail: "https://images.unsplash.com/photo-1428908728789-d2de25dbd4e2?auto=format&fit=crop&w=1200&q=85",
    aspectRatio: "16-9",
    description: "雨上がりのアスファルトに反射する光、水滴の落ちる音。日常の中に潜む静かな再生の瞬間を、16mmフィルム特有の粒子感と淡い色彩でフィルムに焼き付けた習作。",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&playlist=dQw4w9WgXcQ&controls=0&showinfo=0&rel=0&modestbranding=1"
  },
  {
    id: "light-shadow",
    title: "LIGHT & SHADOW",
    category: "Document Film",
    year: "2024",
    thumbnail: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85",
    aspectRatio: "16-9",
    description: "伝統的な左官職人の手仕事と、現代建築の対話を記録したドキュメンタリー。素材と光が織りなすディテールをマクロレンズで捉え、工芸の持つ時間軸を追体験させる。",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&playlist=dQw4w9WgXcQ&controls=0&showinfo=0&rel=0&modestbranding=1"
  },
  {
    id: "parallel-lines",
    title: "PARALLEL LINES",
    category: "Art Film",
    year: "2024",
    thumbnail: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?auto=format&fit=crop&w=1200&q=85",
    aspectRatio: "16-9",
    description: "二人の人物が交差することのない対照的な空間を歩む、実験的アートワーク。スプリットスクリーンや鏡面反射を効果的に用い、心理的なパラドックスを表現した。",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&playlist=dQw4w9WgXcQ&controls=0&showinfo=0&rel=0&modestbranding=1"
  },
  {
    id: "silent-voice",
    title: "SILENT VOICE",
    category: "Music Video",
    year: "2024",
    thumbnail: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85",
    aspectRatio: "16-9",
    description: "アコースティックユニット「nagi」のデビュー曲に書き下ろしたMV。ノイズや環境音とシームレスに混ざり合う歌声を、静謐な水辺のロケーションと長回しのカットで表現。",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&playlist=dQw4w9WgXcQ&controls=0&showinfo=0&rel=0&modestbranding=1"
  },
  {
    id: "monochrome-mind",
    title: "MONOCHROME MIND",
    category: "Commercial Film",
    year: "2023",
    thumbnail: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=85",
    aspectRatio: "16-9",
    description: "家具メーカー「RITSU」のコンセプトムービー。「余白と生きる」をコンセプトに、無駄を削ぎ落としたミニマルな住空間をシネマティックに演出し、美学を伝える。",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&playlist=dQw4w9WgXcQ&controls=0&showinfo=0&rel=0&modestbranding=1"
  },
  {
    id: "horizon",
    title: "HORIZON",
    category: "Short Film",
    year: "2023",
    thumbnail: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=85",
    aspectRatio: "16-9",
    description: "果てなく続く水平線を見つめる旅人のロードムービー。広角レンズが捉える圧倒的な自然のテクスチャと、その中に佇む個人のミニマルなダイアローグ。第12回インディーフィルムフェスタ推薦作品。",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&playlist=dQw4w9WgXcQ&controls=0&showinfo=0&rel=0&modestbranding=1"
  }
];

// Export for ES modules or attach to window for global access
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { WORKS_DATA };
} else {
  window.WORKS_DATA = WORKS_DATA;
}
