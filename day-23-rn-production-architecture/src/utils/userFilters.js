// Utils are small, reusable functions with no UI or network responsibility.
// Keeping this logic separate makes it easy to test, like a Swift helper function.
export function filterUsers(users, searchText) {
  const query = searchText.trim().toLowerCase();

  if (!query) {
    return users;
  }

  return users.filter((user) => {
    const searchableValues = [
      user.name,
      user.email,
      user.company?.name,
    ];

    return searchableValues.some((value) =>
      value?.toLowerCase().includes(query),
    );
  });
}
