import React from 'react';
import './FrenmoTags.css';

function FrenmoTags() {
  const [
    tags,
    setTags
  ] = React.useState(['Im a tag']);
  const addTags = event => {
    if (event.key === 'Enter') {
      setTags([
        ...tags,
        event.target.value
      ]);
      event.target.value = '';
    }
  };
  return (
    <div className="tags-input">
      <ul>
        {tags.map((tag, index) => (
          <li
            key={index}
            className="FrenmoTags__tag"
          >
            <span>
              {tag}
              <p>X</p>
            </span>
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Press enter to add tags"
        onKeyUp={addTags}
      />
    </div>
  );
}

export default FrenmoTags;
