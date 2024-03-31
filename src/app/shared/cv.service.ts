import { Injectable } from '@angular/core';

import { experiences } from '../data/experiences.data';
import { summary } from '../data/summary.data';
import { tagsList } from '../data/tags.data';
import { iconsList } from '../data/icons.data';
import { barsList } from '../data/bars.data';
import { timelineList } from '../data/timeline.data';
import { header } from '../data/header.data';

@Injectable()
export class CVService {
    getHeader(){
        return Promise.resolve(header);
    }
    getExperiences() {
        return Promise.resolve(experiences);
    }
    getSummary(){
        return Promise.resolve(summary);
    }
    getTags(){
        return Promise.resolve(tagsList);
    }
    getIcons(){
        return Promise.resolve(iconsList);
    }
    getBars(){
        return Promise.resolve(barsList);
    }
    getTimeline(){
        return Promise.resolve(timelineList);
    }
}