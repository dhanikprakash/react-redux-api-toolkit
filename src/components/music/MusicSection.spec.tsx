import { exampleData } from "./ExampleData";
import { MusicSection } from "./MusicSection";
import { Provider } from "react-redux";
import { store } from "../../store/rootReducer";
import * as renderer from "react-test-renderer";

describe("MusicSection", () => {
  const status = "idle";
  test("should render", async () => {
    const data = renderer
      .create(
        <Provider store={store}>
          <MusicSection searchResults={exampleData} status={status} />
        </Provider>
      )
      .toJSON();

    expect(data).toMatchSnapshot();
  });
});
