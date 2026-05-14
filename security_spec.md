# Security Specification - CC Club

## 1. Data Invariants
- Users must have a unique profile at `/users/{userId}`.
- Initial balance must be 0 for new users.
- Role can only be 'USER' or 'ADMIN'.
- Only Admins can modify account balances or transition roles.
- Deposit requests must start in 'PENDING' state.
- Only Admins can transition deposit request states.
- Purchased cards must be owned by the user who bought them.
- Card data is sensitive and must only be visible to the owner or admin.

## 2. Dirty Dozen Payloads
1. **Identity Spoofing**: Attempt to create a user profile with a different UID.
2. **Privilege Escalation**: Attempt to set `role: 'ADMIN'` during registration.
3. **Wallet Injection**: Attempt to set `balance: 9999` during registration.
4. **Illegal Update**: User attempting to update their own role.
5. **Shadow Deposit**: Attempting to create a deposit request with `status: 'APPROVED'`.
6. **State Hijacking**: Non-admin attempting to approve a deposit request.
7. **Cross-User Leak**: Authenticated user attempting to read another user's purchased cards.
8. **Resource Exhaustion**: Creating a document with extremely large fields (covered by size checks).
9. **Query Scraping**: Attempting to list all users without being an admin.
10. **ID Poisoning**: Injecting junk characters into document IDs.
11. **Negative Deposit**: Creating a deposit request with a negative amount.
12. **Double Spending**: Attempting to purchase a card with insufficient local state (Firestore transaction ensures atomicity).

## 3. Test Runner
(A separate test file would usually be here, but for this environment we rely on rule evaluation).
