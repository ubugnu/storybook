import { global as globalThis } from '@junk-temporary-prototypes/global';

import Button from './Button.svelte';
import Pre from './Pre.svelte';
import Form from './Form.svelte';
import Html from './Html.svelte';

globalThis.Components = { Button, Pre, Form, Html };
globalThis.storybookRenderer = 'svelte';
