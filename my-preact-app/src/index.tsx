import { render } from 'preact';
import { Suspense } from "react";

import { Tab } from "@headlessui/react";

import { TestComp, TestWrapper } from "./lazyBarrier";

export function App() {
	return (
		<Suspense fallback={<p>Loading...</p>}>
			<Tab.Group>
				<Tab>
					<p>Foo</p>
				</Tab>
				<Tab.Panels>
					<Tab.Panel>
						<TestWrapper>
							<TestComp />
						</TestWrapper>
					</Tab.Panel>
				</Tab.Panels>
			</Tab.Group>
		</Suspense>
	);
}

render(<App />, document.getElementById('app'));
