export default {
    spec_dir: "spec",
    spec_files: [
      "**/*[sS]pec.js"
    ],
    helpers: [
      "helpers/**/*.js"
    ],
    env: {
      stopSpecOnExpectationFailure: false,
      random: true,
      forbidDuplicateNames: true
    }
  }
  