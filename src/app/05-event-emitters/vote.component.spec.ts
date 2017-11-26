import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {
  var component: VoteComponent; 

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('should raise voteChanged event when upvoted', () => {
    let totalVotes = null;
    // we can subscribe to the voteChanged as it is a event emitter 
     component.voteChanged.subscribe(tv => totalVotes = tv)
     // as event emitters are observables we can subscribe to them
     component.upVote();  
     expect(totalVotes).toBe(1);
  });
});