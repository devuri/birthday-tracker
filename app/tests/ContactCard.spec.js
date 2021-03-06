import React from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import ContactCard from '../components/ContactCard';

describe('ContactCard component', () => {
  beforeEach(() => {
    wrapper = shallow(<ContactCard />);
  });

  it('should be rendered into a View container', () => {
    expect(wrapper.type()).to.equal(View);
  });

  it('should render 2 Text components', () => {
    expect(wrapper.find(Text)).to.have.length(2);
  });

  it('should render 3 View components', () => {
    expect(wrapper.find(View)).to.have.length(3);
  });

  it('should render 1 Image component', () => {
    expect(wrapper.find(Image)).to.have.length(1);
  });

  it('should have props for firstName, lastName, birthdayDate, id, and onPress', () => {
    expect(wrapper.props('firstName')).to.be.defined;
    expect(wrapper.props('lastName')).to.be.defined;
    expect(wrapper.props('birthdayDate')).to.be.defined;
    expect(wrapper.props('id')).to.be.defined;
    expect(wrapper.props('onPress')).to.be.defined;
  });

  it.skip('should call the onPress prop when clicked', () => {
    const onPress = jest.fn();
    const wrapper = mount(<ContactCard onPress={onPress} />
    );
    wrapper.find(TouchableHighlight).simulate('click');
      expect(onPress).toBeCalled();
  });
});
