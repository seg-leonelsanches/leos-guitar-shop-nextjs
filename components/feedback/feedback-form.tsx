import React from 'react';

import { AnalyticsBrowser } from '@segment/analytics-next';
import { I18n } from 'next-i18next';
import { NextRouter, withRouter } from 'next/router';

import { withAnalytics, withTranslation } from '../../hocs';

export interface IFeedbackFormProps {
    analytics: AnalyticsBrowser;
    router: NextRouter;
    t: Function;
    i18n: I18n;
}

/**
 * This is an example of old-style React programming, using class components.
 * Instead of hooks, we use HOCs (Higher Order Components) to inject the analytics and router objects.
 * The state is initialized in the constructor, and the methods are bound to the class instance.
 */
class FeedbackFormInternal extends React.Component<IFeedbackFormProps> {

    constructor(props: any) {
        super(props);
        this.state = {
            question1: "",
            question2: ""
        };

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
        this.props.analytics.track(this.props.t('Segment.Track.FeedbackSubmitted'), {
            question1: (this.state as any).question1,
            question2: (this.state as any).question2
        });

        alert(this.props.t('Feedback.ThanksForYourFeedback'));
        this.props.router.push('/');
    }

    render() {
        return <>
            <h2>{this.props.t('Feedback.TellUsAboutYourExperience')}</h2>
            <div className='box-shadow'>
                <form>
                    <div className='row'>
                        <div className="col mb-3">
                            <label htmlFor="question1" className="form-label">{this.props.t('Feedback.Question1')}</label>
                            <textarea className="form-control" id="question1" onChange={(event) => this.setQuestion1(event.target.value)} />
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col mb-3">
                            <label htmlFor="question2" className="form-label">{this.props.t('Feedback.Question2')}</label>
                            <textarea className="form-control" id="question2" onChange={(event) => this.setQuestion2(event.target.value)} />
                        </div>
                    </div>

                    <button type="button" className="btn btn-primary" onClick={() => this.submitAnswers()}>{this.props.t('Feedback.Submit')}</button>
                </form>
            </div>
        </>;
    }
}

export const FeedbackForm = withTranslation(withAnalytics(withRouter(FeedbackFormInternal)));