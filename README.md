# playBdd

Example project that uses [playBdd](https://github.com/agrasso-c4w/playBdd) to run BDD tests.

## How to report a bug

1. [Fork](https://github.com/agrasso-c4w/playBdd/fork) the repo!
2. Clone it to your local machine

   ```
   git clone https://github.com/YOUR_GITHUB_USERNAME/playBdd.git
   ```

3. Change directory to `playBdd`

   ```
   cd playBdd
   ```

4. Install dependencies

   ```
   npm install
   ```

5. Install browsers

   ```
   npx playwright install
   ```

6. Run tests

   ```
   npm test
   ```

   Output:

   ```
   Running 2 tests using 1 worker
   2 passed (2.3s)
   ```

7. Make changes reproducing a bug

8. Commit and push changes
   ```
   git add .
   git commit -m'repro for playBdd issue xxx'
   git push
   ```
9. [Open a pull-request](https://github.com/agrasso-c4w/playBdd/pulls) and share the link
