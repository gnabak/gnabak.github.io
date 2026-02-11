export function formatDate(date: Date): string {
	return new Intl.DateTimeFormat('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	}).format(date);
}

export function formatDateShort(date: Date): string {
	return new Intl.DateTimeFormat('en-US', {
		year: 'numeric',
		month: 'short',
		day: 'numeric',
	}).format(date);
}

export function formatDateISO(date: Date): string {
	return date.toISOString();
}

export function getRelativeTime(date: Date): string {
	const now = new Date();
	const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

	const intervals = {
		year: 31536000,
		month: 2592000,
		week: 604800,
		day: 86400,
		hour: 3600,
		minute: 60,
	};

	for (const [unit, seconds] of Object.entries(intervals)) {
		const interval = Math.floor(diffInSeconds / seconds);
		if (interval >= 1) {
			return new Intl.RelativeTimeFormat('en', { numeric: 'auto' }).format(
				-interval,
				unit as Intl.RelativeTimeFormatUnit
			);
		}
	}

	return 'just now';
}
