import React, { Component } from "react";

const FrenmoContext = React.createContext({
  frenmoList: {},
  frenmo: {},
  frenmoCategories: [
    {
      id: 1,
      category: "Advice"
    },
    {
      id: 2,
      category: "Career"
    },
    {
      id: 3,
      category: "Community"
    },
    {
      id: 4,
      category: "Creative"
    },
    {
      id: 5,
      category: "Education"
    },
    {
      id: 6,
      category: "Emergency"
    },
    {
      id: 7,
      category: "Family"
    },
    {
      id: 8,
      category: "Food"
    },
    {
      id: 9,
      category: "Gaming"
    },
    {
      id: 10,
      category: "Health"
    },
    {
      id: 11,
      category: "IT"
    },
    {
      id: 12,
      category: "Kids"
    },
    {
      id: 13,
      category: "Miscellaneous"
    },
    {
      id: 14,
      category: "Needs fixing"
    },
    {
      id: 15,
      category: "Pets"
    },
    {
      id: 16,
      category: "Plants"
    },
    {
      id: 17,
      category: "Relationship"
    },
    {
      id: 18,
      category: "Religion & Spirituality"
    },
    {
      id: 19,
      category: "Ridesharing"
    },
    {
      id: 20,
      category: "Sports"
    },
    {
      id: 21,
      category: "Travel"
    },
    {
      id: 22,
      category: "Volunteers Needed"
    },
    {
      id: 23,
      category: "Wedding"
    }
  ],
  addFrenmo: () => {},
  setPublicFrenmos: () => {},
  clearError: () => {},
  setError: () => {}
});

export default FrenmoContext;

export class FrenmoProvider extends Component {
  state = {
    frenmoList: {},
    frenmo: {},
    frenmoCategories: [
      {
        id: 1,
        category: "Advice"
      },
      {
        id: 2,
        category: "Career"
      },
      {
        id: 3,
        category: "Community"
      },
      {
        id: 4,
        category: "Creative"
      },
      {
        id: 5,
        category: "Education"
      },
      {
        id: 6,
        category: "Emergency"
      },
      {
        id: 7,
        category: "Family"
      },
      {
        id: 8,
        category: "Food"
      },
      {
        id: 9,
        category: "Gaming"
      },
      {
        id: 10,
        category: "Health"
      },
      {
        id: 11,
        category: "IT"
      },
      {
        id: 12,
        category: "Kids"
      },
      {
        id: 13,
        category: "Miscellaneous"
      },
      {
        id: 14,
        category: "Needs fixing"
      },
      {
        id: 15,
        category: "Pets"
      },
      {
        id: 16,
        category: "Plants"
      },
      {
        id: 17,
        category: "Relationship"
      },
      {
        id: 18,
        category: "Religion & Spirituality"
      },
      {
        id: 19,
        category: "Ridesharing"
      },
      {
        id: 20,
        category: "Sports"
      },
      {
        id: 21,
        category: "Travel"
      },
      {
        id: 22,
        category: "Volunteers Needed"
      },
      {
        id: 23,
        category: "Wedding"
      }
    ]
  };

  addFrenmo = frenmo => {
    this.setState([...this.state.frenmoList, frenmo]);
  };

  setPublicFrenmos = frenmoList => {
    this.setState({ frenmoList });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  setError = error => {
    console.error(error);
    this.setState({ error });
  };

  render() {
    const value = {
      frenmoList: this.state.frenmoList,
      frenmo: this.state.frenmo,
      frenmoCategories: this.state.frenmoCategories,
      addFrenmo: this.addFrenmo,
      setPublicFrenmos: this.setPublicFrenmos,
      clearError: this.clearError,
      setError: this.setError
    };
    return (
      <FrenmoContext.Provider value={value}>
        {this.props.children}
      </FrenmoContext.Provider>
    );
  }
}
