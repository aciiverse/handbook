// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
	site: "https://handbook.aciiverse.com",
	base: "/handbook/",
	integrations: [
		starlight({
			title: "handbook",
			favicon: "./favicon.ico",
			logo: {
				src: "./src/assets/aciiverse_logo.webp",
				alt: "aciiverse handbook logo",
			},
			social: [{ icon: "github", label: "GitHub", href: "https://github.com/aciiverse/handbook" }],
			sidebar: [
				{
					label: "Jetzt Starten 🚀",
					link: "start",
				},
				{
					label: "Architekturen 🏗️",
					autogenerate: {
						directory: "architectures",
					},
				},
				{
					label: "Systeme 🖥️",
					autogenerate: {
						directory: "systems",
					},
				},
				{
					label: "Git 🌱",
					autogenerate: {
						directory: "git",
					},
				},
				{
					label: "Sprachen 💬",
					autogenerate: {
						directory: "languages",
					},
				},
				{
					label: "Frameworks 🧩",
					autogenerate: {
						directory: "deployment",
					},
				},
				{
					label: "Datenbanken 🗄️",
					autogenerate: {
						directory: "databases",
					},
				},
				{
					label: "Container 📦",
					autogenerate: {
						directory: "containers",
					},
				},
				{
					label: "Deployment 🚀",
					autogenerate: {
						directory: "deployment",
					},
				},
				{
					label: "Tools 🧰",
					autogenerate: {
						directory: "tools",
					},
				},
				{
					label: "Templates 📄",
					autogenerate: {
						directory: "templates",
					},
				},
				{
					label: "Guides ➡️",
					autogenerate: {
						directory: "guides",
					},
				},
				{
					label: "Cheat Sheets ⚡",
					autogenerate: {
						directory: "cheat-sheets",
					},
				},
			],
		}),
	],
});
