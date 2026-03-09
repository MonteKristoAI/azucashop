import { motion } from "framer-motion";
import { Play } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const VideoSection = () => {
  return (
    <section className="section-spacing relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="text-center mb-12"
        >
          <span className="text-xs font-medium tracking-[0.25em] uppercase text-primary mb-4 block">
            Resources
          </span>
          <h2 className="heading-section text-3xl md:text-5xl mb-6">
            1 minute of <span className="text-primary">TiME</span>
          </h2>
          <p className="body-large max-w-xl mx-auto">
            Watch how Azuca TiME INFUSION® works.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass-card rounded-2xl overflow-hidden aspect-video relative group cursor-pointer">
            {/* Placeholder for video embed */}
            <div className="absolute inset-0 bg-gradient-to-br from-secondary to-background flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full gradient-pink flex items-center justify-center mx-auto mb-4 glow-pink group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-8 h-8 text-primary-foreground ml-1" />
                </div>
                <p className="text-sm text-muted-foreground">
                  How Azuca TiME INFUSION® Works
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
