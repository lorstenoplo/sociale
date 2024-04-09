import { Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="sticky w-screen top-0 z-50 bg-slate-900 backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href={"/"}>
            <span className="hidden sm:block text-2xl text-white font-semibold">Sociale</span>
          </Link>
          <div className="flex items-center space-x-6 text-white">
            <Link href={"/"}>Home</Link>
            <Link href={"/feed"}>Feed</Link>
            <Link href={"/albums"}>Albums</Link>
            <Link href={"/create"}>
              <motion.div
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
              >
                <Button
                  fontSize={"sm"}
                  rounded={"full"}
                  // display={{ base: 'none', md: 'inline-flex' }}
                  fontWeight={600}
                  colorScheme={"red"}
                  bg={"red.400"}
                  _hover={{
                    bg: "red.500",
                  }}
                >
                  Create Post{" "}
                </Button>
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
