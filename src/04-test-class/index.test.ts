// Uncomment the code below and write your tests
import {
  InsufficientFundsError,
  SynchronizationFailedError,
  TransferFailedError,
  getBankAccount,
} from '.';

jest.mock('lodash/random', () => {
  return jest
    .fn()
    .mockReturnValueOnce(0)
    .mockReturnValueOnce(100)
    .mockReturnValueOnce(0)
    .mockReturnValueOnce(0)
    .mockReturnValueOnce(0)
    .mockReturnValueOnce(1);
});

describe('BankAccount', () => {
  test('should create account with initial balance', () => {
    const initialBalance = 1000000;
    const account = getBankAccount(initialBalance);
    expect(account.getBalance()).toBe(initialBalance);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    const initialBalance = 1000000;
    const account = getBankAccount(initialBalance);
    const withdrawBalance = initialBalance + 1;
    expect(() => account.withdraw(withdrawBalance)).toThrow(
      InsufficientFundsError,
    );
  });

  test('should throw error when transferring more than balance', () => {
    const initialBalance = 1000000;
    const account = getBankAccount(initialBalance);
    const receivingAccount = getBankAccount(0);
    const transferBalance = initialBalance + 1;
    expect(() => account.transfer(transferBalance, receivingAccount)).toThrow(
      InsufficientFundsError,
    );
  });

  test('should throw error when transferring to the same account', () => {
    const initialBalance = 1000000;
    const account = getBankAccount(initialBalance);
    expect(() => account.transfer(42, account)).toThrow(TransferFailedError);
  });

  test('should deposit money', () => {
    const initialBalance = 10;
    const account = getBankAccount(initialBalance);
    const depositAmount = 5;
    account.deposit(depositAmount);
    expect(account.getBalance()).toBe(15);
  });

  test('should withdraw money', () => {
    const initialBalance = 10;
    const account = getBankAccount(initialBalance);
    const depositAmount = 5;
    account.withdraw(depositAmount);
    expect(account.getBalance()).toBe(5);
  });

  test('should transfer money', () => {
    const initialBalance = 10;
    const amountSent = 2;
    const senderAccount = getBankAccount(initialBalance);
    const receiverAccount = getBankAccount(initialBalance);
    senderAccount.transfer(amountSent, receiverAccount);
    expect(senderAccount.getBalance()).toBe(8);
    expect(receiverAccount.getBalance()).toBe(12);
  });

  // public async fetchBalance(): Promise<number | null> {
  //   const balance = random(0, 100, false);
  //   const requestFailed = random(0, 1, false) === 0;
  //   return requestFailed ? null : balance;
  // }

  test('fetchBalance should return number in case if request did not failed', async () => {
    // jest.mock('lodash/random', () => {
    //   return jest
    //     .fn()
    //     .mockReturnValueOnce(() => 0)
    //     .mockReturnValueOnce(() => 100);
    // });
    // const account = getBankAccount(5);
    // const balance = await account.fetchBalance();
    // expect(balance).toBe(100);
  });

  test('should set new balance if fetchBalance returned number', async () => {
    // jest.mock('lodash/random', () => {
    //   return jest.fn().mockReturnValueOnce(() => 0);
    // });
    // const account = getBankAccount(5);
    // await account.synchronizeBalance();
    // expect(account.getBalance()).toBe(0);
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    jest.mock('lodash/random', () => {
      return jest.fn().mockReturnValueOnce(() => 1);
    });
    const account = getBankAccount(5);
    expect(account.synchronizeBalance()).rejects.toThrow(
      SynchronizationFailedError,
    );
  });
});
