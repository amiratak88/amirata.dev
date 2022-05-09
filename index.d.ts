/* eslint-disable @typescript-eslint/no-unused-vars */

namespace React {
	type FCWithChildren<P = {}> = FC<P & { children: ReactNode }>;
}
