"use client";

import React, { useRef, useState } from "react";

const Page = () => {
	const [showPlayIcon, setShowPlayIcon] = useState(true);
	const videoRef = useRef<HTMLVideoElement>(null);

	function playVideo() {
		setShowPlayIcon(false);
		videoRef.current?.play();
	}

	function pauseVideo() {
		setShowPlayIcon(true);
		videoRef.current?.pause();
	}

	return (
		<div className="overflow-x-hidden open-sans-300 bg-amber-50 min-h-[60vh] text-gray-900 p-8">
			<div className="mt-20"></div>
			<h1 className="text-5xl text-[#f3b71f] mb-8 uppercase font-bold text-center">
				About your coach
			</h1>
			<div className="flex flex-col gap-16 text-left lg:text-justify">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
					<div className="col-span-1 w-full h-fit relative">
						{showPlayIcon && (
							<div
								onClick={playVideo}
								className="absolute z-1 top-0 left-0 right-0 bottom-0 flex justify-center flex-col items-center text-2xl font-bold"
							>
								<div className="w-16 h-16 p-4 bg-[#090b0e4d] rounded-full">
									<img src="/icons/play.svg" alt="play icon" />
								</div>
							</div>
						)}
						<video
							ref={videoRef}
							onEnded={() => setShowPlayIcon(true)}
							onClick={pauseVideo}
							src="/about/Neil_intro_1.mp4"
							className="h-[70%] mx-auto"
						></video>
					</div>
					<div className="col-span-1 lg:col-span-2 text-2xl">
						<p>
							I am an experienced mentor, motivational speaker and life coach,
							practising for over 10 years. I firmly believe in coaching not
							just from studies and books, but from own lived experiences and I
							am very passionate about this. I draw on both of these sources
							when working with my coaching clients and have created bespoke
							techniques which always prove to be highly effective and
							successful. I specialise in helping you realise your authenticity,
							helping you feel energised and removing blockages. I work with
							clients from all stages of life who want to take steps to create
							positive change in their lives. From young to elderly, from
							parents to sportspeople and more!
						</p>
					</div>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
					<div className="col-span-1 lg:col-span-2 text-2xl order-1 lg:order-first">
						<p>
							In my life, I have experienced profound challenges, lightbulb
							moments and pivots. All which have shaped my approach to coaching,
							which is rooted in empathy, deep listening, and a drive to help
							others. My environment growing up enabled me to experience a vast
							amount which shaped my mind, character and resolve.
							Professionally, I have worked in many sectors, from finance,
							policy, management, government and project development. All of
							which helped sharpen my resolve and enhance my leadership skills,
							creativity, passion, proactivity and mental strength. I am proud
							of my journey so far, both personally and career wise. I want all
							my clients to have that sense of pride too!
						</p>
					</div>
					<div className="col-span-1 shadow-md flex flex-col justify-center items-center">
						<img src="/about/002.jpg" alt="talking with client" />
					</div>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
					<div className="col-span-1 shadow-md flex flex-col justify-center items-center">
						<img src="/about/003.jpg" alt="solo" />
					</div>
					<div className="col-span-1 lg:col-span-2 text-2xl">
						<p>
							Through it all, life coaching is where I have felt the most
							passion and fulfilment. It allows me to communicate, build
							connections and chemistry, and let my character come out through
							helping and assisting others. Always in an authentic, real and
							professional manner. To my clients I’m not just a coach, it’s a
							partnership where we achieve the best results. I will push you,
							provoke you positively, and help you realise the progress and wins
							you will make. I’m a life coach who empowers. My work is focused
							on synergy. Not from textbooks, but from genuine connection,
							willingness and understanding. I firmly believe you get out what
							you put in. I tailor each session with that in mind so that you
							feel energised and focused.
						</p>
						<br />
						<p>
							I believe that real and lasting change happens when you feel
							genuinely heard, understood, and safe to explore what matters most
							to you. My role is to provide a steady, compassionate space where
							you can reflect, gain clarity, and take meaningful steps forward
							at your own pace. Together we will build a trusting coaching
							relationship that supports your growth, honours your
							individuality, and ensures you feel accompanied every step of the
							way.
						</p>
					</div>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
					<div className="col-span-1 lg:col-span-2 text-2xl">
						<p>
							As a qualified life coach, I am committed to upholding the highest
							professional standards. I continuously invest in my professional
							development to remain current with coaching methods, ethical
							guidelines, and best practices, ensuring every session is
							delivered with integrity, care, and professionalism.
						</p>
					</div>
					<div className="col-span-1 shadow-md flex flex-col justify-center items-center">
						<img src="/about/004.jpeg" alt="quote" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Page;
