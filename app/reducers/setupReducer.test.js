import {
    expect
} from 'chai';
import setupReducer from './setupReducer';
import {
    CHECK_SETUP_PROGRESS,
    CHECK_SETUP_FINISHED
} from '../actions/actionTypes';

describe('setup reducer', () => {
    it('should return the initial state', () => {
        expect(
            setupReducer(undefined, {})
        ).to.deep.equal({
            complete: false
        })
    })

    it('should handle CHECK_SETUP_PROGRESS', () => {
        expect(
            setupReducer([], {
                type: CHECK_SETUP_PROGRESS
            })
        ).to.deep.equal({
            checking: true
        })
    });

    it('should handle CHECK_SETUP_FINISHED', () => {
        expect(setupReducer([], {
          type: CHECK_SETUP_FINISHED,
          setup: {
            complete: true,
            awsAccessKeyId: "someKeyId",
            awsSecretAccessKey: "someSecretKey"
          }
        })).to.deep.equal({
          complete: true,
          awsAccessKeyId: "someKeyId",
          awsSecretAccessKey: "someSecretKey"
        })
    })
})
