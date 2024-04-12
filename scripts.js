const path = require('path');
const fs = require('fs');
const { execSync } = require("child_process");

const warm = ['00013-warm-hello-world']

const easy = [
    '00004-easy-pick',
    '00007-easy-readonly',
    '00011-easy-tuple-to-object',
    '00014-easy-first',
    '00018-easy-tuple-length',
    '00043-easy-exclude',
    '00189-easy-awaited',
    '00268-easy-if',
    '00533-easy-concat',
    '00898-easy-includes',
    '03057-easy-push',
    '03060-easy-unshift',
    '03312-easy-parameters',
];

const medium = [
    // '00002-medium-return-type',
    // '00003-medium-omit',
    // '00008-medium-readonly-2',
    '00009-medium-deep-readonly',
    '00010-medium-tuple-to-union',
    '00012-medium-chainable-options',
    '00015-medium-last',
    '00016-medium-pop',
    '00020-medium-promise-all',
    '00062-medium-type-lookup',
    '00106-medium-trimleft',
    '00108-medium-trim',
    '00110-medium-capitalize',
    '00116-medium-replace',
    '00119-medium-replaceall',
    '00191-medium-append-argument',
    '00296-medium-permutation',
    '00298-medium-length-of-string',
    '00459-medium-flatten',
    '00527-medium-append-to-object',
    '00529-medium-absolute',
    '00531-medium-string-to-union',
    '00599-medium-merge',
    '00612-medium-kebabcase',
    '00645-medium-diff',
    '00949-medium-anyof',
    '01042-medium-isnever',
    '01097-medium-isunion',
    '01130-medium-replacekeys',
    '01367-medium-remove-index-signature',
    '01978-medium-percentage-parser',
    '02070-medium-drop-char',
    '02257-medium-minusone',
    '02595-medium-pickbytype',
    '02688-medium-startswith',
    '02693-medium-endswith',
    '02759-medium-requiredbykeys',
    '02793-medium-mutable',
    '02852-medium-omitbytype',
    '02946-medium-objectentries',
    '03062-medium-shift',
    '03188-medium-tuple-to-nested-object',
    '03192-medium-reverse',
    '03196-medium-flip-arguments',
    '03243-medium-flattendepth',
    '03326-medium-bem-style-string',
    '03376-medium-inordertraversal',
    '04179-medium-flip',
    '04182-medium-fibonacci-sequence',
    '04260-medium-nomiwase',
    '04425-medium-greater-than',
    '04471-medium-zip',
    '04484-medium-istuple',
    '04499-medium-chunk',
    '04518-medium-fill',
    '04803-medium-trim-right',
    '05117-medium-without',
    '05140-medium-trunc',
    '05153-medium-indexof',
    '05310-medium-join',
    '05317-medium-lastindexof',
    '05360-medium-unique',
    '05821-medium-maptypes',
    '07544-medium-construct-tuple',
    '08640-medium-number-range',
    '08767-medium-combination',
    '08987-medium-subsequence',
    '09142-medium-checkrepeatedchars',
    '09286-medium-firstuniquecharindex',
    '09616-medium-parse-url-params',
    '09896-medium-get-middle-element',
    '09898-medium-zhao-chu-mu-biao-shu-zu-zhong-zhi-chu-xian-guo-yi-ci-de-yuan-su',
    '09989-medium-tong-ji-shu-zu-zhong-de-yuan-su-ge-shu',
    '10969-medium-integer',
    '16259-medium-to-primitive',
    '17973-medium-deepmutable',
    '18142-medium-all',
    '18220-medium-filter',
    '21104-medium-findall',
    '21106-medium-zu-he-jian-lei-xing-combination-key-type',
    '21220-medium-permutations-of-tuple',
    '25170-medium-replace-first',
    '25270-medium-transpose',
    '26401-medium-json-schema-to-typescript',
    '27133-medium-square',
    '27152-medium-triangular-number',
    '27862-medium-cartesianproduct',
    '27932-medium-mergeall',
    '27958-medium-checkrepeatedtuple',
    '28333-medium-public-type',
    '29650-medium-extracttoobject',
    '29785-medium-deep-omit',
    '30301-medium-isodd',
    '30430-medium-tower-of-hanoi',
    '30958-medium-pascals-triangle',
    '30970-medium-shitariteraru',
];

const hard = [
    '00006-hard-simple-vue',
    '00017-hard-currying-1',
    '00055-hard-union-to-intersection',
    '00057-hard-get-required',
    '00059-hard-get-optional',
    '00089-hard-required-keys',
    '00090-hard-optional-keys',
    '00112-hard-capitalizewords',
    '00114-hard-camelcase',
    '00147-hard-c-printf-parser',
    '00213-hard-vue-basic-props',
    '00223-hard-isany',
    '00270-hard-typed-get',
    '00300-hard-string-to-number',
    '00399-hard-tuple-filter',
    '00472-hard-tuple-to-enum-object',
    '00545-hard-printf',
    '00553-hard-deep-object-to-unique',
    '00651-hard-length-of-string-2',
    '00730-hard-union-to-tuple',
    '00847-hard-string-join',
    '00956-hard-deeppick',
    '01290-hard-pinia',
    '01383-hard-camelize',
    '02059-hard-drop-string',
    '02822-hard-split',
    '02828-hard-classpublickeys',
    '02857-hard-isrequiredkey',
    '02949-hard-objectfromentries',
    '04037-hard-ispalindrome',
    '05181-hard-mutable-keys',
    '05423-hard-intersection',
    '06141-hard-binary-to-decimal',
    '07258-hard-object-key-paths',
    '08804-hard-two-sum',
    '09155-hard-validdate',
    '09160-hard-assign',
    '09384-hard-maximum',
    '09775-hard-capitalize-nest-object-keys',
    '13580-hard-replace-union',
    '14080-hard-fizzbuzz',
    '14188-hard-run-length-encoding',
    '15260-hard-tree-path-array',
    '19458-hard-snakecase',
    '25747-hard-isnegativenumber',
    '28143-hard-optionalundefined',
    '30575-hard-bitwisexor',
    '32427-hard-unbox',
    '32532-hard-binary-addition',
];

const extreme = [
    '00005-extreme-readonly-keys',
    '00151-extreme-query-string-parser',
    '00216-extreme-slice',
    '00274-extreme-integers-comparator',
    '00462-extreme-currying-2',
    '00476-extreme-sum',
    '00517-extreme-multiply',
    '00697-extreme-tag',
    '00734-extreme-inclusive-range',
    '00741-extreme-sort',
    '00869-extreme-distributeunions',
    '00925-extreme-assert-array-index',
    '06228-extreme-json-parser',
    '07561-extreme-subtract',
    '31447-extreme-countreversepairs',
];

const executeAddDir = async () => {
    const dirPaths = easy.map((dir) => {
        return path.join(__dirname, 'easy', dir)
    });

    for (const dirPath of dirPaths) {
        fs.mkdirSync(dirPath);
        fs.writeFileSync(path.join(dirPath, 'cory.ts'), '// 답을 적어주세요.');
    }
}

const commitExecute = async (problem, difficult) => {
    const checkout = `git checkout -b ${problem}`;
    const gitAdd = `git add ${difficult}/${problem}/cory.ts`;
    const gitCommit = `git commit -m "Add ${problem}"`;
    const gitPush = `git push -u origin ${problem}`;
    const checkoutAll = `git checkout All`;

    await execSync(checkout);
    await execSync(gitAdd);
    await execSync(gitCommit);
    await execSync(gitPush);
    await execSync(checkoutAll);
}

const executeAll = async () => {
    for(const problem of medium) {
        await commitExecute(problem, 'medium');
    }
}

executeAll().catch((error) => {
    console.log(error)
})

/*
브랜치 따고 커밋 & push 하기

git checkout -b TC-2793
git add "02793-medium-mutable"
git commit -m "Add 02793-medium-mutable"
git push -u origin TC-2793
 */
