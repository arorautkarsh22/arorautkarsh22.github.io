'use client';
import { InfiniteSlider } from '@/components/motion-primitives/infinite-slider';
import { Tilt } from '@/components/motion-primitives/tilt';
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContainer,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogImage,
} from '@/components/motion-primitives/morphing-dialog';

import { MorphingDialogDescription } from '@/components/motion-primitives/morphing-dialog';

const hackathonCaption = "This was our first time showcasing the project in the Smart India Hackathon. We didn't get selected in the internal round, but we learnt from our mistakes together. Leading this amazing team to a 3rd place finish in our next attempt was an incredibly rewarding experience.";
const exhibitionCaption = "Leading our team to a 3rd place finish in the tech expo, competing alongside 30+ teams from various colleges, was a fantastic experience.";

const galleryItems = [
  { src: '/gallery/IMG_0725.JPG', caption: hackathonCaption },
  { src: '/gallery/IMG_0726.JPG', caption: hackathonCaption },
  { src: '/gallery/IMG_0727.JPG', caption: hackathonCaption },
  { src: '/gallery/DSC_0093.JPG', caption: exhibitionCaption },
  { src: '/gallery/exhibition_1.jpg', caption: exhibitionCaption },
  { src: '/gallery/exhibition_2.jpg', caption: exhibitionCaption },
];

export default function Gallery() {
  return (
    <section id="gallery" className="section px-6 py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto mb-12 text-center">
        <h2 className="text-sm font-mono text-[#58a6ff] tracking-widest uppercase mb-3">
          Gallery
        </h2>
        <p className="text-[#8b949e] max-w-2xl mx-auto mb-12">
          A glimpse into hackathons, exhibitions, and building things.
        </p>
      </div>

      <InfiniteSlider speed={50} speedOnHover={15} gap={24} className="py-4">
        {galleryItems.map((item, idx) => (
          <MorphingDialog key={idx}>
            <MorphingDialogTrigger className="flex-shrink-0 cursor-pointer focus:outline-none">
              <Tilt rotationFactor={10} isRevese>
                <MorphingDialogImage
                  src={item.src}
                  alt={`Gallery image ${idx + 1}`}
                  className="w-64 h-48 object-cover rounded-xl border border-[#30363d]"
                />
              </Tilt>
            </MorphingDialogTrigger>
            <MorphingDialogContainer>
              <MorphingDialogContent className="relative bg-[#161b22] border border-[#30363d] rounded-2xl shadow-2xl p-4 w-[90vw] max-w-5xl h-[85vh] flex flex-col items-center justify-center gap-4">
                <div className="flex-1 w-full min-h-0 flex items-center justify-center relative">
                  <MorphingDialogImage
                    src={item.src}
                    alt={`Gallery image ${idx + 1}`}
                    className="w-full h-full object-contain rounded-xl"
                  />
                </div>
                {item.caption && (
                  <MorphingDialogDescription className="w-full bg-[#0d1117] border border-[#30363d] p-4 rounded-xl text-[#c9d1d9] text-sm md:text-base text-center shadow-md flex-shrink-0">
                    <p className="leading-relaxed font-medium">{item.caption}</p>
                  </MorphingDialogDescription>
                )}
                <MorphingDialogClose className="absolute top-4 right-4 text-[#c9d1d9] bg-[#0d1117]/80 hover:bg-[#0d1117] p-2 rounded-full backdrop-blur-sm transition-colors border border-[#30363d] z-10" />
              </MorphingDialogContent>
            </MorphingDialogContainer>
          </MorphingDialog>
        ))}
      </InfiniteSlider>
    </section>
  );
}
