const Tab1 = () => <h1>
        Text of tab1<br />
        Text of tab1<br />
        Text of tab1
    </h1>
const Tab2 = () => <h1>Text of tab2</h1>
const Tab3 = () => <h1>
        Text of tab3<br />
        Text of tab3
    </h1>
const TABS_BTN = [
    {
        dataName: 1,
        title: 'Tab1'
    },
    {
        dataName: 2,
        title: 'Tab2'
    },
    {
        dataName: 3,
        title: 'Tab3'
    }
]
class App extends React.Component {
    state = {activeTab: 1}
    handleTab = e => this.setState({activeTab: +e.target.dataset.name})
    render() {
        const {activeTab} = this.state
        return (
            <div>
                {TABS_BTN.map(({dataName, title}, index) => (
                    <button
                        key={index}
                        data-name={dataName}
                        onClick={this.handleTab}>
                            {title}
                    </button>
                ))}
                {activeTab === 1 && <Tab1 />}
                {activeTab === 2 && <Tab2 />}
                {activeTab === 3 && <Tab3 />}
                Active tab is: {activeTab === 1 ? 'first' :
                                activeTab === 2 ? 'second' : 'third'}
            </div>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('root'))