"use client";


import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Star,
  Sofa,
} from "lucide-react";

const title = "Luxury Interior Design Services";

const words = title.split(" ");

const fadeUp = {
  hidden: { opacity: 0, y: 70 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-[#f8f6f2]">
      {/* Background */}

      <div className="absolute inset-0">
        {/* <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-24 left-0 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl"
        /> */}

        <motion.div
          animate={{
            y: [-30, 30, -30],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute right-0 top-32 h-72 w-72 rounded-full bg-orange-300/30 blur-3xl"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
          >
            {/* <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-medium shadow-md">
              <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
              Premium Interior Design
            </span> */}

            <h1 className="text-5xl font-black leading-tight text-gray-900 sm:text-6xl lg:text-7xl">

              {words.map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 50,
                    rotateX: -90,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                  }}
                  transition={{
                    delay: index * 0.15,
                    duration: 0.6,
                  }}
                  className="mr-4 inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1,
              }}
              className="mt-8 max-w-xl text-lg leading-8 text-gray-600"
            >
              Transform your home into a timeless masterpiece with bespoke
              interiors crafted for elegance, comfort, and modern living. From
              concept to completion, we design spaces that truly reflect your
              lifestyle.
            </motion.p>

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1.2,
              }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                href="/booking"
                className="group flex items-center gap-2 rounded-full bg-black px-8 py-4 font-semibold text-white transition hover:bg-[#d8a55a]"
              >
                Get Free Consultation

                <ArrowRight className="transition group-hover:translate-x-2" />
              </Link>

              {/* <Link
                href="/portfolio"
                className="rounded-full border border-gray-300 px-8 py-4 font-semibold hover:bg-white"
              >
                View Projects
              </Link> */}
            </motion.div>

            {/* Features */}

            {/* <div className="mt-12 grid grid-cols-2 gap-5">

              {[
                "Custom Interior Design",
                "Space Planning",
                "3D Visualization",
                "Luxury Furniture",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{
                    opacity: 0,
                    x: -30,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: 1.4 + i * 0.2,
                  }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="text-green-600" />

                  <span className="font-medium text-gray-700">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div> */}
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1,
            }}
            className="relative"
          >

            <motion.div
              whileHover={{
                scale: 1.02,
              }}
              transition={{
                duration: .4,
              }}
              className="overflow-hidden  shadow-2xl"
            >
              <img
                src="/images/IMG_3191.JPG.jpeg"
                alt="Interior Design"
                width={700}
                height={850}
                className="h-[650px] w-full object-cover"
              />
            </motion.div>

            {/* Floating Card */}

            <motion.div
              initial={{
                opacity: 0,
                y: 60,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1.3,
              }}
              whileHover={{
                y: -8,
              }}
              className="absolute bottom-8 left-6 rounded-3xl bg-white/80 backdrop-blur-xl p-6 shadow-xl"
            >
              <div className="flex items-center gap-4">

                <div className="rounded-full bg-[#d8a55a]/20 p-4">
                  <Sofa className="text-[#d8a55a]" />
                </div>

                <div>
                  <h3 className="text-3xl font-bold">250+</h3>

                  <p className="text-gray-600">
                    Interior Projects Completed
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Experience */}

            {/* <motion.div
              animate={{
                y: [-10, 10, -10],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              className="absolute -right-4 top-20 rounded-3xl bg-black px-8 py-6 text-white shadow-xl"
            >
              <h2 className="text-4xl font-bold">12+</h2>

              <p className="text-sm uppercase tracking-widest">
                Years Experience
              </p>
            </motion.div> */}

          </motion.div>

        </div>

      </div>
    </section>
  );
}