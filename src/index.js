

import { StrictMode } from 'react';
import { render } from 'react-dom';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { Router } from './Router'
import { setIfInTWA } from 'lib/Utils/Tools'
render(
	<StrictMode>
		<Router />
	</StrictMode>,
	document.getElementById('root')
)

setIfInTWA()
serviceWorkerRegistration.register()






