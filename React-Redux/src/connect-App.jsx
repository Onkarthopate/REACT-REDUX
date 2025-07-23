import './App.css';
import { connect } from 'react-redux';
import { functIncre, functDecre } from './Action';

function App({ count, incrCount, decreCount, functIncre, functDecre }) {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Redux Counter</h1>
      <h2>Total Count: {count}</h2>
      <p>Times Incremented: {incrCount}</p>
      <p>Times Decremented: {decreCount}</p>

      <button onClick={functIncre}>Increment</button>
      <button onClick={functDecre} style={{ marginLeft: '10px' }}>
        Decrement
      </button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  count: state.count,
  incrCount: state.incrCount,
  decreCount: state.decreCount
});

const mapDispatchToProps = {
  functIncre,
  functDecre
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
 