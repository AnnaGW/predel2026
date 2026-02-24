export function cn(
	...els: Array<string | { [key: string]: boolean } | undefined>
): string {
	return els.reduce<string>((classNameArrAsStr, strOrObj) => {
		if (typeof strOrObj === 'string') {
			return classNameArrAsStr
				? [classNameArrAsStr, strOrObj].join(' ')
				: strOrObj;
		}

		if (typeof strOrObj === 'object') {
			return [
				classNameArrAsStr,
				Object.entries(strOrObj).reduce(
					(objClassNamesAsStr, [className, isExists]) => {
						if (isExists) {
							return objClassNamesAsStr
								? [objClassNamesAsStr, className].join(' ')
								: className;
						}

						return objClassNamesAsStr;
					},
					''
				),
			]
				.filter(Boolean)
				.join(' ');
		}

		return classNameArrAsStr;
	}, '');
}
