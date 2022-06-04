import { Provider } from "react-redux";
import { store } from "../../store/rootReducer";
import MockAdapter from "axios-mock-adapter";
import { Music } from "./Music";
import axios from "axios";
import { exampleData } from "./ExampleData";
import * as renderer from "react-test-renderer";

describe("MusicSection", () => {
  let fetchDataMock: MockAdapter;

  beforeEach(() => {
    fetchDataMock = new MockAdapter(axios);
    fetchDataMock
      .onGet("https://jsonplaceholder.typicode.com/posts")
      .reply(200, exampleData);
  });

  afterEach(() => {
    fetchDataMock.restore();
  });

  test("should render", async () => {
    const data = renderer
      .create(
        <Provider store={store}>
          <Music />
        </Provider>
      )
      .toJSON();

    expect(data).toMatchSnapshot();
  });
});
