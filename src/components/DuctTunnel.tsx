import { motion, useScroll, useTransform } from 'motion/react';

export function DuctTunnel() {
  const { scrollYProgress } = useScroll();

  // ── Camera motion ──
  // Tunnel is ~5000px deep. Camera advances from z=0 to z=5400,
  // passing through the vent grate (at z=-4700) into the room (at z=-5000).
  const z = useTransform(scrollYProgress, [0, 1], [0, 5400]);

  // ── Fade choreography ──
  // Tunnel walls dissolve first as we near the exit
  const tunnelOpacity = useTransform(scrollYProgress, [0.75, 0.88], [1, 0]);
  // Vent grate lingers a beat longer, then dissolves as we push through
  const ventOpacity = useTransform(scrollYProgress, [0.80, 0.94], [1, 0]);
  // Vignette (black border framing) fades last, revealing the full room
  const vignetteOpacity = useTransform(scrollYProgress, [0.88, 1], [1, 0]);
  // Room brightens as we get closer (starts slightly dimmed by distance)
  const roomBrightness = useTransform(scrollYProgress, [0.5, 1], [0.7, 1]);

  // ── Duct wall textures ──
  // Ribbed sheet metal with subtle color variation
  const ribsVertical = [
    'repeating-linear-gradient(to bottom,',
    '  #101318 0px, #1a1f28 6px, #252c38 12px,',
    '  #2e3646 18px, #252c38 24px, #1a1f28 30px, #101318 36px)',
  ].join('\n');

  const ribsHorizontal = [
    'repeating-linear-gradient(to right,',
    '  #101318 0px, #1a1f28 6px, #252c38 12px,',
    '  #2e3646 18px, #252c38 24px, #1a1f28 30px, #101318 36px)',
  ].join('\n');

  // Seam lines every ~500px to break up the metal
  const seamsV = 'repeating-linear-gradient(to bottom, transparent 0px, transparent 498px, #0a0c10 498px, #333 500px, #0a0c10 502px, transparent 502px)';
  const seamsH = 'repeating-linear-gradient(to right, transparent 0px, transparent 498px, #0a0c10 498px, #333 500px, #0a0c10 502px, transparent 502px)';

  // Directional lighting overlays — darker near camera, lighter toward the room
  const lightFromEnd = 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 60%, rgba(40,50,60,0.15) 100%)';
  const lightFromEndH = 'linear-gradient(to right, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 60%, rgba(40,50,60,0.15) 100%)';

  // ── Vent grate pattern ──
  // Horizontal louver slats (thick) + thin vertical support bars
  const ventSlats = [
    // Horizontal louver slats — thick with beveled highlight
    'repeating-linear-gradient(0deg,',
    '  transparent 0px, transparent 24px,',
    '  #0c0c0c 24px, #1a1a1a 26px, #2a2a2a 28px, #1a1a1a 30px, #0c0c0c 32px,',
    '  transparent 32px)',
  ].join('\n');

  const ventBars = [
    // Vertical support bars — thinner
    'repeating-linear-gradient(90deg,',
    '  transparent 0px, transparent 100px,',
    '  #0c0c0c 100px, #222 102px, #0c0c0c 104px,',
    '  transparent 104px)',
  ].join('\n');

  // ── Tunnel geometry ──
  // Cross-section: 800px wide × 500px tall (rectangular HVAC duct)
  // Depth: walls span from z ≈ +500 (slightly behind camera) to z ≈ -5000
  const DUCT_W = 800;   // half = 400
  const DUCT_H = 500;   // half = 250
  const WALL_LENGTH = 5500;
  const WALL_CENTER_Z = -2250; // center of the wall panels along Z

  return (
    <div
      className="fixed inset-0 w-full h-full bg-black overflow-hidden pointer-events-none z-0"
      style={{ perspective: '800px', perspectiveOrigin: '50% 50%' }}
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
        {/* ═══════════════════════════════════════════
            LIVING ROOM — furthest back (z = -5000)
            Must be behind the grate so it shows through the slats
            ═══════════════════════════════════════════ */}
        <motion.div
          style={{
            position: 'absolute',
            width: 6000,
            height: 4000,
            marginLeft: -3000,
            marginTop: -2000,
            transform: 'translateZ(-5000px)',
            backgroundColor: '#2a2a2a',
            backgroundImage:
              'url("https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2560&auto=format&fit=crop")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: useTransform(roomBrightness, (v) => `brightness(${v})`),
          }}
        />

        {/* ═══════════════════════════════════════════
            VENT GRATE — at z = -4700 (in front of room)
            Separate from tunnel so it fades independently
            ═══════════════════════════════════════════ */}
        <motion.div
          style={{
            position: 'absolute',
            width: DUCT_W,
            height: DUCT_H,
            marginLeft: -DUCT_W / 2,
            marginTop: -DUCT_H / 2,
            transform: 'translateZ(-4700px)',
            opacity: ventOpacity,
            background: `${ventSlats}, ${ventBars}`,
            border: '22px solid #0e0e0e',
            borderRadius: 2,
            boxShadow:
              'inset 0 0 60px rgba(0,0,0,0.7), 0 0 40px 10px rgba(0,0,0,0.8)',
          }}
        />

        {/* Light spill from the room onto the grate — subtle warm glow */}
        <motion.div
          style={{
            position: 'absolute',
            width: DUCT_W - 44,
            height: DUCT_H - 44,
            marginLeft: -(DUCT_W - 44) / 2,
            marginTop: -(DUCT_H - 44) / 2,
            transform: 'translateZ(-4690px)',
            opacity: ventOpacity,
            background:
              'radial-gradient(ellipse at center, rgba(180,160,120,0.08) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        {/* ═══════════════════════════════════════════
            TUNNEL WALLS — the HVAC duct
            4 walls forming a rectangular tube
            ═══════════════════════════════════════════ */}
        <motion.div
          style={{
            position: 'absolute',
            transformStyle: 'preserve-3d',
            opacity: tunnelOpacity,
          }}
        >
          {/* ── Ceiling ── */}
          <div
            style={{
              position: 'absolute',
              width: DUCT_W,
              height: WALL_LENGTH,
              marginLeft: -DUCT_W / 2,
              marginTop: -WALL_LENGTH / 2,
              transform: `translateZ(${WALL_CENTER_Z}px) rotateX(90deg) translateZ(${DUCT_H / 2}px)`,
              background: `${lightFromEnd}, ${seamsV}, ${ribsVertical}`,
            }}
          />

          {/* ── Floor ── */}
          <div
            style={{
              position: 'absolute',
              width: DUCT_W,
              height: WALL_LENGTH,
              marginLeft: -DUCT_W / 2,
              marginTop: -WALL_LENGTH / 2,
              transform: `translateZ(${WALL_CENTER_Z}px) rotateX(-90deg) translateZ(${DUCT_H / 2}px)`,
              background: `${lightFromEnd}, ${seamsV}, ${ribsVertical}`,
            }}
          />

          {/* ── Left Wall ── */}
          <div
            style={{
              position: 'absolute',
              width: WALL_LENGTH,
              height: DUCT_H,
              marginLeft: -WALL_LENGTH / 2,
              marginTop: -DUCT_H / 2,
              transform: `translateZ(${WALL_CENTER_Z}px) rotateY(-90deg) translateZ(${DUCT_W / 2}px)`,
              background: `${lightFromEndH}, ${seamsH}, ${ribsHorizontal}`,
            }}
          />

          {/* ── Right Wall ── */}
          <div
            style={{
              position: 'absolute',
              width: WALL_LENGTH,
              height: DUCT_H,
              marginLeft: -WALL_LENGTH / 2,
              marginTop: -DUCT_H / 2,
              transform: `translateZ(${WALL_CENTER_Z}px) rotateY(90deg) translateZ(${DUCT_W / 2}px)`,
              background: `${lightFromEndH}, ${seamsH}, ${ribsHorizontal}`,
            }}
          />
        </motion.div>
      </motion.div>

      {/* ═══════════════════════════════════════════
          VIGNETTE — dark borders that frame the duct opening
          Fades out at the end so the room fills the screen
          ═══════════════════════════════════════════ */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 55% 45% at 50% 50%, transparent 0%, rgba(0,0,0,0.6) 60%, #000 100%)',
          opacity: vignetteOpacity,
        }}
      />
    </div>
  );
}
