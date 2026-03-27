import React, { useState } from 'react';
import { useAdmin } from '../context/AdminContext';
import { get } from 'lodash-es';

export const EditableText = ({ path, tag: Tag = 'span', className = '', placeholder = '' }: any) => {
  const { isEditMode, content, updateContent } = useAdmin();
  
  if (!content) return null;
  const value = get(content, path, '');

  if (!isEditMode) {
    return <Tag className={className} dangerouslySetInnerHTML={{ __html: value || placeholder }} />;
  }

  return (
    <Tag
      contentEditable
      suppressContentEditableWarning
      className={`${className} outline-none hover:ring-2 hover:ring-gold-500/50 focus:ring-2 focus:ring-gold-500 transition-all cursor-text rounded px-1 -mx-1`}
      onBlur={(e: any) => updateContent(path, e.target.innerHTML)}
      dangerouslySetInnerHTML={{ __html: value || placeholder }}
    />
  );
};

export const EditableImage = ({ path, className = '', alt = '' }: any) => {
  const { isEditMode, content, updateContent } = useAdmin();
  const [isEditing, setIsEditing] = useState(false);
  const [tempUrl, setTempUrl] = useState('');
  
  if (!content) return null;
  const value = get(content, path, '');

  if (!isEditMode) {
    return <img src={value} alt={alt} className={className} />;
  }

  return (
    <div className="relative group inline-block w-full h-full">
      <img src={value} alt={alt} className={`${className} group-hover:opacity-50 transition-opacity`} />
      
      {!isEditing && (
        <div 
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 cursor-pointer"
          onClick={() => {
            setTempUrl(value);
            setIsEditing(true);
          }}
        >
          <span className="text-white text-sm font-bold bg-black/70 px-3 py-1 rounded">Edit Image URL</span>
        </div>
      )}

      {isEditing && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 p-4 z-10">
          <input 
            type="text" 
            value={tempUrl}
            onChange={(e) => setTempUrl(e.target.value)}
            className="w-full px-2 py-1 text-sm text-black rounded mb-2"
            placeholder="Image URL"
            autoFocus
          />
          <div className="flex gap-2">
            <button 
              onClick={() => {
                updateContent(path, tempUrl);
                setIsEditing(false);
              }}
              className="bg-green-500 text-white px-3 py-1 rounded text-xs"
            >
              Save
            </button>
            <button 
              onClick={() => setIsEditing(false)}
              className="bg-red-500 text-white px-3 py-1 rounded text-xs"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
