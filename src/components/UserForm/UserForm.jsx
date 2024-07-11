export const UserForm = () => {
  return (
    <div>
      <form>
        <label>
          <span>Name:</span>
          <input type='text' />
        </label>
        <label>
          <span>Surname:</span>
          <input type='surname' />
        </label>
        <label>
          <span>Age:</span>
          <input type='age' />
        </label>
        <label>
          <span>Email:</span>
          <input type='email' />
        </label>
        <label>
          <span>Role</span>
          <select>
            <option value='user'>User</option>
            <option value='admin'>Admin</option>
          </select>
        </label>
        <label>
          <span>About</span>
          <textarea></textarea>
        </label>
        <button type='submit'>Create</button>
      </form>
    </div>
  );
};
