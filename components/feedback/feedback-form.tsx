import React from 'react';

import { AnalyticsBrowser } from '@segment/analytics-next';
import { NextRouter, useRouter } from 'next/router';
import { useAnalytics } from '../../hooks';

export class FeedbackForm extends React.Component {
    analytics: AnalyticsBrowser;
    router: NextRouter;

    constructor(props: any) {
        super(props);
        this.state = {
            question1: "",
            question2: ""
        };
        this.analytics = useAnalytics();
        this.router = useRouter();

        // For React class components, we need to bind the methods to the class instance, 
        // so that the methods can access the state and props of the class instance properly.
        this.setQuestion1 = this.setQuestion1.bind(this);
        this.setQuestion2 = this.setQuestion2.bind(this);
        this.submitAnswers = this.submitAnswers.bind(this);
    }

    setQuestion1(value: string) {
        this.setState({ question1: value });
    }

    setQuestion2(value: string) {
        this.setState({ question2: value });
    }

    submitAnswers() {
        // Send the answers to Segment
        this.analytics.track('Feedback Submitted', {
            question1: (this.state as any).question1,
            question2: (this.state as any).question2
        });

        alert('Thanks for your feedback!');
        this.router.push('/');
    }

    render() {
        return <>
            <h2>Tell us about your experience!</h2>
            <div className='box-shadow'>
                <form>
                    <div className='row'>
                        <div className="col-lg-6 mb-3">
                            <label htmlFor="first-name" className="form-label">First name</label>
                            <input type="text" className="form-control" id="first-name" onChange={(event) => this.setQuestion1(event.target.value)} />
                        </div>
                        <div className="col-lg-6 mb-3">
                            <label htmlFor="last-name" className="form-label">Last name</label>
                            <input type="text" className="form-control" id="last-name" onChange={(event) => this.setQuestion2(event.target.value)} />
                        </div>
                    </div>

                    <button type="button" className="btn btn-primary" onClick={() => this.submitAnswers()}>Submit</button>
                </form>
            </div>
        </>;
    }
}