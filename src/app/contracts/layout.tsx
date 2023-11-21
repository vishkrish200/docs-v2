import { DocLayout } from "@/components/Layouts/DocLayout";
import { sidebar } from "./sidebar";

export default async function Layout(props: { children: React.ReactNode }) {
	return <DocLayout sideBar={sidebar}>{props.children}</DocLayout>;
}
