
import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
	index("routes/home.tsx"),
	route("about", "routes/about.tsx"),
	route("services", "routes/services.tsx"),
	route("projects", "routes/projects.tsx"),
	route("contact", "routes/contact.tsx"),
	route("blog", "routes/blog.tsx"),
] satisfies RouteConfig;
