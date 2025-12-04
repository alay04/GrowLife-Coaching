"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollFadeProps {
	direction?: "left" | "right";
	children: React.ReactNode;
	duration?: number;
	ease?: string;
	start?: string;
	initialX?: number;
}

/**
 * ScrollFade component
 * Fades in from 0 → 1 opacity and translates X on first scroll into view.
 * Animation runs **once**.
 */
export function ScrollFade({
	direction = "left",
	children,
	duration = 1,
	ease = "power2.out",
	start = "top 80%",
	initialX = 100,
}: ScrollFadeProps) {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;

		const xStart = direction === "left" ? -initialX : initialX;

		gsap.set(el, { opacity: 0, x: xStart });

		gsap.to(el, {
			opacity: 1,
			x: 0,
			duration,
			ease,
			scrollTrigger: {
				trigger: el,
				start,
				once: true,
			},
		});
	}, [direction, duration, ease, initialX]);

	return (
		<div style={{ opacity: 0 }} ref={ref}>
			{children}
		</div>
	);
}
