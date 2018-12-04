import React from "react";
import { shallow, configure } from "enzyme";
import EntriesView from "../../containers/entries/entriesContainer";
import { ViewDiariesTest } from "../../components/entries/viewEntries";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

it("test view all entries container component", () => {
  let component = shallow(<EntriesView />);
  var node = component.find(".containers");
  expect(node.length).toEqual(1);
});
it("test view all entries container component", () => {
  let component = shallow(
    <EntriesView
      results={[
        {
          due_date: "2018-12-06",
          name: "Cultivating",
          purpose: "Culti  ",
          type: "agriculture"
        }
      ]}
    />
  );
  var node = component.find(".containers");
  expect(node.length).toEqual(1);
});
it("test view run component will receive props", () => {
  let component = shallow(<ViewDiariesTest dispatch={jest.fn()} />);
  component.setProps({
    entry: {
      Message: "your entry has been succesfully created!"
    },
    deleted: { Message: "Deleted your entry succesfully!" }
  });
});
it("test view run component will receive props", () => {
  let component = shallow(<ViewDiariesTest dispatch={jest.fn()} />);
  component.setProps({
    entry: {
      Message: "your enty has been succesfully created!"
    },
    deleted: { Message: "Deletd your entry succesf" },
    modify: { Message: "modified your entry succe" }
  });
});
it("test view run component will receive props", () => {
  let dispatch = jest.fn();
  let component = shallow(<ViewDiariesTest dispatch={dispatch} />);
  component.instance().handleDelete(1);
  expect(dispatch).toBeCalled();
});
