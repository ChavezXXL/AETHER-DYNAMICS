import { motion, useScroll, useTransform } from 'motion/react';

export function DuctTunnel() {
    const { scrollYProgress } = useScroll();

  // SHORT tunnel so the vent is RIGHT THERE from the start.
  // Tunnel ~2400px deep. Grate at z=-2100, room at z=-2400.
  // perspective: 1200 means the grate starts at scale ~0.36 — clearly visible.
  // Camera pushes from z=0 → z=2900, passing through the grate into the room.
  const z = useTransform(scrollYProgress, [0, 1], [0, 2900]);

  // Tunnel walls fade as we approach the exit
  const tunnelOpacity = useTransform(scrollYProgress, [0.6, 0.78], [1, 0]);
    // Vent grate holds a beat longer, then dissolves as we push through
  const ventOpacity = useTransform(scrollYProgress, [0.65, 0.85], [1, 0]);
    // Vignette fades last — opens up to reveal the full room
  const vignetteOpacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);

  // Duct cross-section: tight and claustrophobic
  const DUCT_W = 620;
    const DUCT_H = 380;
    const WALL_LEN = 2800;
    const WALL_Z = -1100;

  // Ribbed sheet metal textures
  const ribsV = `repeating-linear-gradient(to bottom,
      #0d1017 0px, #161b24 5px, #1f2633 10px, #2a3342 15px,
          #1f2633 20px, #161b24 25px, #0d1017 30px)`;

  const ribsH = `repeating-linear-gradient(to right,
      #0d1017 0px, #161b24 5px, #1f2633 10px, #2a3342 15px,
          #1f2633 20px, #161b24 25px, #0d1017 30px)`;

  // Seam lines every ~400px
  const seamsV = `repeating-linear-gradient(to bottom,
      transparent 0px, transparent 398px,
          #080a0e 398px, #2a2a2a 400px, #080a0e 402px,
              transparent 402px)`;

  const seamsH = `repeating-linear-gradient(to right,
      transparent 0px, transparent 398px,
          #080a0e 398px, #2a2a2a 400px, #080a0e 402px,
              transparent 402px)`;

  // Directional lighting — dark near camera, subtle light leak from room end
  const lightV = `linear-gradient(to bottom,
      rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.15) 50%, rgba(50,60,70,0.12) 100%)`;
    const lightH = `linear-gradient(to right,
        rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.15) 50%, rgba(50,60,70,0.12) 100%)`;

  // Vent grate pattern
  // Thick horizontal louver slats with a metallic bevel
  const ventSlats = `repeating-linear-gradient(0deg,
      transparent 0px, transparent 20px,
          #080808 20px, #151515 22px, #252525 24px, #151515 26px, #080808 28px,
              transparent 28px)`;

  // Thin vertical support bars
  const ventBars = `repeating-linear-gradient(90deg,
      transparent 0px, transparent 85px,
          #080808 85px, #1a1a1a 87px, #080808 89px,
              transparent 89px)`;

  return (
        <div
                className="fixed inset-0 w-full h-full bg-black overflow-hidden pointer-events-none z-0"
                style={{ perspective: '1200px', perspectiveOrigin: '50% 50%' }}
              >
              <motion.div
                        className="absolute top-1/2 left-1/2"
                        style={{
                                    width: 0,
                                    height: 0,
                                    transformStyle: 'preserve-3d',
                                    z,
                        }}
                      >
              
                {/* LIVING ROOM — behind the grate at z=-2400 */}
                      <div
                                  className="absolute"
                                  style={{
                                                width: 4000,
                                                height: 2600,
                                                marginLeft: -2000,
                                                marginTop: -1300,
                                                transform: 'translateZ(-2400px)',
                                                backgroundColor: '#2a2a2a',
                                                backgroundImage:
                                                                'url("https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2560&auto=format&fit=crop")',
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                  }}
                                />
              
                {/* VENT GRATE — at z=-2100, clearly in front of the room */}
                      <motion.div
                                  className="absolute"
                                  style={{
                                                width: DUCT_W,
                                                height: DUCT_H,
                                                marginLeft: -DUCT_W / 2,
                                                marginTop: -DUCT_H / 2,
                                                transform: 'translateZ(-2100px)',
                                                opacity: ventOpacity,
                                                background: `${ventSlats}, ${ventBars}`,
                                                border: '18px solid #0a0a0a',
                                                borderRadius: 2,
                                                boxShadow:
                                                                'inset 0 0 50px rgba(0,0,0,0.6), 0 0 30px 8px rgba(0,0,0,0.9)',
                                  }}
                                />
              
                {/* Warm light spill through the grate slats */}
                      <motion.div
                                  className="absolute"
                                  style={{
                                                width: DUCT_W - 36,
                                                height: DUCT_H - 36,
                                                marginLeft: -(DUCT_W - 36) / 2,
                                                marginTop: -(DUCT_H - 36) / 2,
                                                transform: 'translateZ(-2090px)',
                                                opacity: ventOpacity,
                                                background:
                                                                'radial-gradient(ellipse at center, rgba(200,180,140,0.06) 0%, transparent 70%)',
                                                pointerEvents: 'none',
                                  }}
                                />
              
                {/* TUNNEL WALLS — tight rectangular HVAC duct */}
                      <motion.div
                                  className="absolute"
                                  style={{
                                                transformStyle: 'preserve-3d',
                                                opacity: tunnelOpacity,
                                  }}
                                >
                        {/* Ceiling */}
                                <div
                                              className="absolute"
                                              style={{
                                                              width: DUCT_W,
                                                              height: WALL_LEN,
                                                              marginLeft: -DUCT_W / 2,
                                                              marginTop: -WALL_LEN / 2,
                                                              transform: `translateZ(${WALL_Z}px) rotateX(90deg) translateZ(${DUCT_H / 2}px)`,
                                                              background: `${lightV}, ${seamsV}, ${ribsV}`,
                                              }}
                                            />
                      
                        {/* Floor */}
                                <div
                                              className="absolute"
                                              style={{
                                                              width: DUCT_W,
                                                              height: WALL_LEN,
                                                              marginLeft: -DUCT_W / 2,
                                                              marginTop: -WALL_LEN / 2,
                                                              transform: `translateZ(${WALL_Z}px) rotateX(-90deg) translateZ(${DUCT_H / 2}px)`,
                                                              background: `${lightV}, ${seamsV}, ${ribsV}`,
                                              }}
                                            />
                      
                        {/* Left Wall */}
                                <div
                                              className="absolute"
                                              style={{
                                                              width: WALL_LEN,
                                                              height: DUCT_H,
                                                              marginLeft: -WALL_LEN / 2,
                                                              marginTop: -DUCT_H / 2,
                                                              transform: `translateZ(${WALL_Z}px) rotateY(-90deg) translateZ(${DUCT_W / 2}px)`,
                                                              background: `${lightH}, ${seamsH}, ${ribsH}`,
                                              }}
                                            />
                      
                        {/* Right Wall */}
                                <div
                                              className="absolute"
                                              style={{
                                                              width: WALL_LEN,
                                                              height: DUCT_H,
                                                              marginLeft: -WALL_LEN / 2,
                                                              marginTop: -DUCT_H / 2,
                                                              transform: `translateZ(${WALL_Z}px) rotateY(90deg) translateZ(${DUCT_W / 2}px)`,
                                                              background: `${lightH}, ${seamsH}, ${ribsH}`,
                                              }}
                                            />
                      </motion.div>motion.div>
              </motion.div>motion.div>
        
          {/* VIGNETTE — tight dark frame selling the inside the duct feel */}
              <motion.div
                        className="absolute inset-0"
                        style={{
                                    background:
                                                  'radial-gradient(ellipse 50% 40% at 50% 50%, transparent 0%, rgba(0,0,0,0.5) 50%, #000 100%)',
                                    opacity: vignetteOpacity,
                        }}
                      />
        </div>div>
      );
}</div>
