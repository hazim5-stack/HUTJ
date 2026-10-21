import React from 'react';
import {Composition} from 'remotion';
import {HUTJAd} from './HUTJAd';
export const Root: React.FC = () => <Composition id="HUTJAd" component={HUTJAd} width={1080} height={1920} fps={60} durationInFrames={900}/>;
