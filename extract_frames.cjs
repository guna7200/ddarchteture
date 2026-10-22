const { execSync } = require('child_process');
const ffmpeg = require('@ffmpeg-installer/ffmpeg').path;
const path = require('path');
const fs = require('fs');

const framesDir = path.join(__dirname, 'public', 'frames');
if (!fs.existsSync(framesDir)) fs.mkdirSync(framesDir, { recursive: true });

// Clean existing frames
const existing = fs.readdirSync(framesDir);
existing.forEach(f => fs.unlinkSync(path.join(framesDir, f)));

console.log('Extracting Full-HD Lossless 1080p frames from hero_video_1.mp4...');
// qscale:v 1 = Maximum 100% lossless JPEG quality, 1920:1080 Full HD
execSync(`"${ffmpeg}" -y -i "public/banner_videos/hero_video_1.mp4" -vf "fps=14,scale=1920:1080:flags=lanczos" -qscale:v 1 -qmin 1 "public/frames/frame_%04d.jpg"`, { stdio: 'inherit' });

const count1 = fs.readdirSync(framesDir).length;
console.log('Video 1 Full-HD frames generated:', count1);

console.log('Extracting Full-HD Lossless 1080p frames from hero_video_2.mp4...');
execSync(`"${ffmpeg}" -y -i "public/banner_videos/hero_video_2.mp4" -vf "fps=14,scale=1920:1080:flags=lanczos" -qscale:v 1 -qmin 1 -start_number ${count1 + 1} "public/frames/frame_%04d.jpg"`, { stdio: 'inherit' });

const totalCount = fs.readdirSync(framesDir).length;
console.log('Total 1080p Full-HD Lossless frames generated successfully:', totalCount);
