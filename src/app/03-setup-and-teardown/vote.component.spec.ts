import { VoteComponent } from './vote.component'; 
// the execution of one test should not have impact on the other test, otherwise the tests may break.
// in automated testing each test must run in isolated world.
describe('VoteComponent', () => {
  //arrange 
  let component: VoteComponent;

  beforeEach(() => {
    component = new VoteComponent();
  }); // function in beforeeach will be called before each test.
  //similarly we have aftereach which will be called after each test. we do clean up in aftereach 
  // beforeAll() and afterAll() will be executed once befpre and after all tests respectively.
  //in automated testing, we refer to what we write in the beforeEach function as the setup and in the case of the afterEach we call it tear down. 
  it('should increment totalVotes when upvoted', () => {
    //act
    component.upVote();
    //assert
    expect(component.totalVotes).toBe(1);
  });

  it('should increment totalVotes when downvotevoted', () => {
    //act
    component.downVote();
    //assert
    expect(component.totalVotes).toBe(-1);
  });
});