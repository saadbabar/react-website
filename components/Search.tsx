import React, { useState, useEffect, useRef } from 'react';

export function Search() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    removeHighlights();
    if (searchTerm) {
      const foundMatches = highlightText(searchTerm);
      if (!foundMatches) {
        // If no matches found, just close the search box
        setIsOpen(false);
      }
    }
    setIsOpen(false);
  };

  const removeHighlights = () => {
    const marks = document.querySelectorAll('mark');
    marks.forEach(mark => {
      const parent = mark.parentNode;
      if (parent) {
        parent.replaceChild(document.createTextNode(mark.textContent || ''), mark);
        parent.normalize();
      }
    });
  };

  const highlightText = (text: string): boolean => {
    if (window) {
      const body = document.body;
      const regex = new RegExp(text, 'gi');
      const walker = document.createTreeWalker(body, NodeFilter.SHOW_TEXT);
      const nodesToHighlight: Text[] = [];

      while (walker.nextNode()) {
        const node = walker.currentNode as Text;
        if (node.textContent && node.textContent.match(regex)) {
          nodesToHighlight.push(node);
        }
      }

      if (nodesToHighlight.length === 0) {
        return false; // No matches found
      }

      nodesToHighlight.forEach((node) => {
        const highlightedContent = node.textContent!.replace(regex, (match) => `<mark>${match}</mark>`);
        const span = document.createElement('span');
        span.innerHTML = highlightedContent;
        node.parentNode!.replaceChild(span, node);
      });

      return true; // Matches found and highlighted
    }
    return false;
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-300 hover:text-white transition duration-300 focus:outline-none"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
          <form onSubmit={handleSearch} className="px-4 py-2">
            <input
              ref={inputRef}
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search..."
              className="w-full px-2 py-1 text-sm text-gray-900 border rounded"
            />
          </form>
        </div>
      )}
    </div>
  );
}