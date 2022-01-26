import { Observable } from '@nativescript/core';
import { SegmentConfig, Segment } from "nativescript-segment";
import { SEGMENT_KEY } from '../../../secret';

export class HomeViewModel extends Observable {
    constructor() {
        super();
        const config: SegmentConfig = {
            trackLifeCycleEvents: true,
            recordScreenViews: true
        };
        Segment.configure(SEGMENT_KEY, config);
    }
}
